package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDto;
import com.minet.walletservice.entities.Wallet;
import com.minet.walletservice.service.WalletService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class WalletControllerTest {

    @InjectMocks
    private WalletController walletController;

    @Mock
    private WalletService walletService;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCreateWallet() {
        WalletDto inputWalletDto = new WalletDto();
        inputWalletDto.setTotalBalance(122.0);
        inputWalletDto.setUserId("2");
        Wallet inputWallet = new Wallet();
        inputWallet.setTotalBalance(122.0);
        inputWallet.setUserId("2");
        inputWallet.setId("1");
        when(modelMapper.map(inputWalletDto, Wallet.class)).thenReturn(inputWallet);
        when(walletService.createWallet(inputWalletDto)).thenReturn(inputWalletDto);
        ResponseEntity<WalletDto> responseEntity = walletController.createWallet(inputWalletDto);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(inputWalletDto, responseEntity.getBody());
    }

    @Test
    void testShowWalletByUserId() {
        String userId = "123";
        String cryptoId = "BTC";
        Wallet wallet = new Wallet();

        when(walletService.showWalletsByIds(userId)).thenReturn(wallet);

        ResponseEntity<Wallet> responseEntity = walletController.showWalletByUserId(userId);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(wallet, responseEntity.getBody());
    }

    @Test
    void testUpdateWallet() {
        String userId = "123";
        String cryptoId = "BTC";
        Double balance = 100.0;
        Wallet updatedWallet = new Wallet();

        when(walletService.updateWallet(userId, balance)).thenReturn(updatedWallet);

        ResponseEntity<Wallet> responseEntity = walletController.updateWallet(userId, balance);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updatedWallet, responseEntity.getBody());
    }
}
