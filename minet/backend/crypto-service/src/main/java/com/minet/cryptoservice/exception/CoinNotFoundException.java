package com.minet.cryptoservice.exception;

public class CoinNotFoundException extends RuntimeException{
    public CoinNotFoundException(String message){
        super(message);
    }
}
