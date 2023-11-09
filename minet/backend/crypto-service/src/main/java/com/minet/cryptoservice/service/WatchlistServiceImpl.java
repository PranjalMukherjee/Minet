package com.minet.cryptoservice.service;


import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Watchlist;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.repository.CoinRepository;
import com.minet.cryptoservice.repository.WatchlistRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchlistServiceImpl implements WatchlistService{
    @Autowired
    private WatchlistRepository watchlistRepository;
    @Autowired
    private CoinRepository coinRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<WatchlistDto> getByUserId(String id) {
        try {
            List<Watchlist> watchlists = watchlistRepository.findByUserId(id);
            return watchlists.stream()
                    .map(watchlist -> modelMapper.map(watchlist,WatchlistDto.class))
                    .toList();
        }catch (EntityPersistenceException e){
            throw new EntityPersistenceException(e.getMessage());
        }
    }

    @Override
    public WatchlistDto saveWatchlist(WatchlistDto watchlistDto) {
        try{
            Watchlist watchlist = watchlistRepository.findByUserIdAndCoinId(watchlistDto.getUserId(), watchlistDto.getCoinId());
            if(watchlist != null && watchlist.getId()!=null)
                 watchlistDto.setId(watchlist.getId());
            Watchlist updatedWatchlist = modelMapper.map(watchlistDto, Watchlist.class);
            return modelMapper.map(watchlistRepository.save(updatedWatchlist), WatchlistDto.class);
        }catch (EntityPersistenceException e){
            throw new EntityPersistenceException(e.getMessage());
        }
    }
}
