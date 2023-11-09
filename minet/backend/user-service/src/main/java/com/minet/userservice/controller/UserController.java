package com.minet.userservice.controller;

import com.minet.userservice.dto.Auth;
import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.NotFoundException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.service.JwtService;
import com.minet.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;
    @Autowired
    JwtService jwtService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable String id) {
            log.info(" >>> INSIDE UserController: getting user by user_id");
            UserDto user = userService.getUserById(id);
            return ResponseEntity.ok(user);

    }

    @GetMapping("/email")
    public ResponseEntity<UserDto> getUserByEmail(@RequestParam("email") String email) {
        UserDto user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public UserDto saveUser(@RequestBody UserDto userDto) {
        log.info(" >>> INSIDE UserController: adding user");
        User user = userMapper.convertToUser(userDto);
        return userService.saveUser(user);
    }

    @PatchMapping("/reset-password")
    public String updateUser(@RequestParam("email") String email, @RequestBody String newPassword) {
            return userService.updateUser(email, newPassword);

    }

    @PostMapping("/token")
    public ResponseEntity<String> getToken(@RequestBody Auth auth) {
        if(auth.getEmail()!=null && auth.getPassword()!=null) {
            String result =  jwtService.generateToken(auth.getEmail(),auth.getPassword());
            return !result.equals("Unable to generate token") ? new ResponseEntity<>(result,HttpStatus.OK) :
                     new ResponseEntity<>("Unable to generate token",HttpStatus.NOT_FOUND);
        }
        else
            return new ResponseEntity<>("Either of email or password is null",HttpStatus.NOT_FOUND);
    }
    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token,@RequestBody Auth auth) {
        try{
            jwtService.isTokenValid(token,auth);
            return "Token is valid";
        }
        catch (Exception e){
            throw new NotFoundException("Not a valid token");
        }
    }
}
