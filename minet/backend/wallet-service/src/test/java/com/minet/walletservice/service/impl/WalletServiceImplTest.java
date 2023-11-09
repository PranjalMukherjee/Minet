package com.minet.walletservice.service.impl;

import com.minet.walletservice.dto.WalletDto;
import com.minet.walletservice.entities.Wallet;
import com.minet.walletservice.exception.UserNotFoundException;
import com.minet.walletservice.repository.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.when;

@SpringBootTest
class WalletServiceImplTest {

    @InjectMocks
    private WalletServiceImpl walletService;

    @Mock
    private WalletRepository walletRepository;

    @Mock
    ModelMapper modelMapper;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
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
       assertNotNull(inputWallet);
    }
    @Test
     void testUpdateWallet() {
        String userId = "user123";
        String cryptoId = "btc";
        Double newBalance = 1000.0;

        Wallet existingWallet = new Wallet();
        existingWallet.setUserId(userId);

        when(walletRepository.findByUserId(userId)).thenReturn(existingWallet);
        when(walletRepository.saveAndFlush(existingWallet)).thenReturn(existingWallet);

        Wallet updatedWallet = walletService.updateWallet(userId, newBalance);

        assertNotNull(updatedWallet);
        assertEquals(newBalance, updatedWallet.getTotalBalance());
        assertNotNull(updatedWallet.getLastModified());
    }

    @Test
    void testUpdateWalletUserNotFound() {
        String userId = "user123";
        String cryptoId = "btc";
        Double newBalance = 1000.0;

        when(walletRepository.findByUserId(userId)).thenReturn(null);

        Throwable exception = assertThrows(UserNotFoundException.class, () -> {
            walletService.updateWallet(userId, newBalance);
        });
        assertEquals("User not exit with id : user123", exception.getMessage());
    }

    @Test
    void testShowWalletsByIds() {
        String userId = "user123";
        String cryptoId = "btc";

        Wallet existingWallet = new Wallet();
        existingWallet.setUserId(userId);
        when(walletRepository.findByUserId(userId)).thenReturn(existingWallet);

        Wallet wallet = walletService.showWalletsByIds(userId);

        assertNotNull(wallet);
        assertEquals(existingWallet, wallet);
    }

    @Test
    void testShowWalletsByIdsUserNotFound() {
        String userId = "user123";
        String cryptoId = "btc";

        when(walletRepository.findByUserId(userId)).thenReturn(null);

        Throwable exception = assertThrows(UserNotFoundException.class, () -> {
            walletService.showWalletsByIds(userId);
        });
    }
}
