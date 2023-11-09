package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/crypto/watchlist")
public class WatchlistController {
    @Autowired
    private WatchlistService watchlistService;

    @GetMapping
    public ResponseEntity<List<WatchlistDto>> getAllByUserId(@RequestParam String userId){
        return new ResponseEntity<>(watchlistService.getByUserId(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<WatchlistDto> saveWatchlist(@RequestBody WatchlistDto watchlistDto){
        return new ResponseEntity<>(watchlistService.saveWatchlist(watchlistDto), HttpStatus.CREATED);
    }
}
