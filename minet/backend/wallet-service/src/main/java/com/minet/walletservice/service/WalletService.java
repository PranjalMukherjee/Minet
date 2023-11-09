package com.minet.walletservice.service;


import com.minet.walletservice.dto.WalletDto;
import com.minet.walletservice.entities.Wallet;



public interface WalletService {

    WalletDto createWallet(WalletDto wallet);
    Wallet updateWallet(String userId,Double balance);
    Wallet showWalletsByIds(String userId);
}
