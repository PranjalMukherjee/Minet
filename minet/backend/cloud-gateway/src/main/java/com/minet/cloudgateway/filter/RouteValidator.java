package com.minet.cloudgateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    private RouteValidator() {}

    public static final List<String> openApiEndpoints = List.of(
            "/api/v1/users",
            "/api/v1/users/email",
            "/api/v1/users/register",
            "/api/v1/users/reset-password",
            "/api/v1/users/validate",
            "/api/v1/users/login",
            "/api/v1/users/token"

    );

    public static final Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().equals(uri));
}
