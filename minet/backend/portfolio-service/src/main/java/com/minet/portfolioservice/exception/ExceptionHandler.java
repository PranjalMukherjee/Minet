package com.minet.portfolioservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class ExceptionHandler {
    @org.springframework.web.bind.annotation.ExceptionHandler
    public ResponseEntity<ExceptionBody> handleException(ElementNotFound e) {
        ExceptionBody elementErrorResponse = new ExceptionBody(HttpStatus.NOT_FOUND.value(),
                e.getMessage(), System.currentTimeMillis());
        return new ResponseEntity<>(elementErrorResponse, HttpStatus.NOT_FOUND);
    }
}
