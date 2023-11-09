package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.WatchlistDto;

import java.util.List;

public interface WatchlistService {
    List<WatchlistDto> getByUserId(String  id);
    WatchlistDto saveWatchlist(WatchlistDto watchlistDto);
}
