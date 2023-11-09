package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.entity.Coin;
import com.minet.cryptoservice.exception.CoinNotFoundException;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.repository.CoinRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CoinServiceImpl implements CoinService{
    @Autowired
    private CoinRepository coinRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<CoinDto> getAllCoins() {
        try{
            List<Coin> coins = coinRepository.findAll();
            return coins.stream()
                    .map(coin -> modelMapper.map(coin, CoinDto.class))
                    .toList();
        }
        catch (EntityPersistenceException e){
            throw new EntityPersistenceException("Error while fetching coins");
        }
    }

    @Override
    public CoinDto getCoinById(String id) {
        try{
            Coin coin = coinRepository.findById(id).orElseThrow(() -> new CoinNotFoundException("Coin not found with id " + id));
            return modelMapper.map(coin, CoinDto.class);
        }catch (CoinNotFoundException e){
            throw new CoinNotFoundException(e.getMessage());
        }
    }
}
