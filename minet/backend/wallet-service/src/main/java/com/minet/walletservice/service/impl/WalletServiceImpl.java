package com.minet.walletservice.service.impl;


import com.minet.walletservice.dto.WalletDto;
import com.minet.walletservice.entities.Wallet;
import com.minet.walletservice.exception.UserNotFoundException;
import com.minet.walletservice.repository.WalletRepository;
import com.minet.walletservice.service.WalletService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Objects;

@Service
public class WalletServiceImpl implements WalletService {
    private final ModelMapper modelMapper;
    @Autowired
    WalletRepository walletRepository;

    public WalletServiceImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public WalletDto createWallet(WalletDto walletDto) {
        Wallet walletEntity = modelMapper.map(walletDto, Wallet.class);
        Wallet savedWallet = walletRepository.save(walletEntity);
        return modelMapper.map(savedWallet, WalletDto.class);
    }


    @Override
    public Wallet updateWallet(String userId, Double balance) {
        Wallet wallet = walletRepository.findByUserId(userId);
        if(Objects.nonNull(wallet)){
            wallet.setTotalBalance(balance);
            wallet.setLastModified(new Timestamp((System.currentTimeMillis())));
            walletRepository.saveAndFlush(wallet);
            return wallet;
        }
        else
            throw new UserNotFoundException("User not exit with id : " + userId);
    }

    @Override
    public Wallet showWalletsByIds(String userId) {
        Wallet wallet = walletRepository.findByUserId(userId);
        if(Objects.nonNull(wallet))
            return wallet;
        else
            throw new UserNotFoundException("User not exit with id : " + userId);
    }
}
