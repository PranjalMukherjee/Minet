package com.minet.cloudgateway.exception;

public class UnAuthorizedAccessException extends RuntimeException{
    public UnAuthorizedAccessException(String message){
        super(message);
    }
}
