package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CoinDto;

import java.util.List;

public interface CoinService {
    List<CoinDto> getAllCoins();
    CoinDto getCoinById(String id);
}
