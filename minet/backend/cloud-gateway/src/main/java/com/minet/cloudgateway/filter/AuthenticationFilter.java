package com.minet.cloudgateway.filter;

import com.minet.cloudgateway.exception.UnAuthorizedAccessException;
import com.minet.cloudgateway.util.Constants;
import com.minet.cloudgateway.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            ServerHttpRequest request=null;
            if (validator.isSecured.test(exchange.getRequest())) {
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new UnAuthorizedAccessException(Constants.HEADER_MISSING_MESSAGE);
                }
                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith(Constants.BEARER)) {
                    authHeader = authHeader.substring(Constants.BEARER_TOKEN_INDEX);
                }
                try {
                    jwtUtil.validateToken(authHeader);
                    request=exchange.getRequest()
                            .mutate()
                            .header("LoggedInUser",jwtUtil.extractUsername(authHeader))
                            .build();
                } catch (Exception e) {
                    log.error("invalid access...!");
                    throw new UnAuthorizedAccessException("Missing authorization header");
                }
            }
            return chain.filter(exchange.mutate().request(request).build());
        });
    }

    public static class Config {}
}
