package com.minet.userservice.exception;

import com.minet.userservice.payload.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ApiResponse> handlerUserNotFoundException(UserNotFoundException exception){
        String message = exception.getMessage();
        ApiResponse apiResponse = ApiResponse.builder()
                .message(message)
                .status(String.valueOf(HttpStatus.NOT_FOUND))
                .build();
        return ResponseEntity.ok(apiResponse);
    }
    @ExceptionHandler(UserExistException.class)
    public ResponseEntity<ApiResponse> handlerUserExistException(UserExistException exception){
        String message = exception.getMessage();
        ApiResponse apiResponse = ApiResponse.builder()
                .message(message)
                .status(String.valueOf(HttpStatus.OK))
                .build();
        return ResponseEntity.ok(apiResponse);
    }
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApiResponse> handlerUserNotFoundException(NotFoundException exception){
        String message = exception.getMessage();
        ApiResponse apiResponse = ApiResponse.builder()
                .message(message)
                .status(String.valueOf(HttpStatus.NOT_FOUND))
                .build();
        return ResponseEntity.ok(apiResponse);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
}
