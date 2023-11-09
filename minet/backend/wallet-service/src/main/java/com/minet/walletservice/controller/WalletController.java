package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDto;
import com.minet.walletservice.entities.Wallet;
import com.minet.walletservice.service.WalletService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/wallet")
public class WalletController {

    @Autowired
    WalletService walletService;

    @PostMapping
    public ResponseEntity<WalletDto> createWallet(@Valid @RequestBody WalletDto wallet){
        WalletDto createdWallet = walletService.createWallet(wallet);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWallet);
    }

    @GetMapping(value = "/{userId}")
    public ResponseEntity<Wallet> showWalletByUserId(@PathVariable String userId){
        Wallet wallet = walletService.showWalletsByIds(userId);
        return ResponseEntity.ok(wallet);
    }

    @PatchMapping(value = "/{userId}")
    public ResponseEntity<Wallet> updateWallet(@PathVariable String userId
            , @RequestParam Double balance){
        Wallet wallet = walletService.updateWallet(userId,balance);
        return ResponseEntity.ok(wallet);
    }

}
