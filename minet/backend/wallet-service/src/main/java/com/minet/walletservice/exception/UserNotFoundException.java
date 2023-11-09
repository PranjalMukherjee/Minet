package com.minet.walletservice.exception;


public class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(String message){
        super(message);
    }
}
