package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/crypto/coins")
public class CoinController {
    @Autowired
    private CoinService coinService;
    @GetMapping
    public ResponseEntity<List<CoinDto>> getAllCoins(){
        return new ResponseEntity<>(coinService.getAllCoins(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CoinDto> getCoinById(@PathVariable String id){
        return new ResponseEntity<>(coinService.getCoinById(id),HttpStatus.OK);
    }
}
