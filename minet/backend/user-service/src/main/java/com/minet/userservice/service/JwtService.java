package com.minet.userservice.service;

import com.fasterxml.jackson.databind.util.JSONPObject;

import com.minet.userservice.dto.Auth;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.NotFoundException;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import netscape.javascript.JSObject;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
@Component
public class JwtService {

    @Value("${SECRET_ID}")
    private String SECRET;

    @Autowired
    private UserRepository userRepository;

    public String extractUsername(String token) {
        return extractClaim(token,Claims::getSubject);
    }
    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver){
        final Claims claims=extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    public void validateToken(final String token) {
        Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJwt(token);
    }

    public boolean isTokenValid(String token, Auth userDetails){
        final String username=extractUsername(token);
        return (username.equals(userDetails.getEmail())) && !isTokenExpired(token);
    }
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    private Date extractExpiration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }
    public String generateToken(String email, String password) {
        JSONObject jsonObject = new JSONObject();

        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if(user.isEmpty()) {
            throw new UserNotFoundException("User not exist with email : "+ email);
        } else {
            if(password.equals(user.get().getPassword())) {
                Map<String, Object> claims = new HashMap<>();
                jsonObject.put("token",createToken(claims, email));
                jsonObject.put("userId",user.get().getId());
                return jsonObject.toString();
            }
        }
        return "Unable to generate token";
    }

    private String createToken(Map<String, Object> claims, String userName) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }
    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

    }
    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
