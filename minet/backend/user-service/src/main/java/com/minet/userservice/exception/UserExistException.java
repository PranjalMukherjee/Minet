package com.minet.userservice.exception;


public class UserExistException extends RuntimeException {
        public UserExistException(String message){
        super(message);
    }
}
