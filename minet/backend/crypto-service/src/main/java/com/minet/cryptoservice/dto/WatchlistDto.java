package com.minet.cryptoservice.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WatchlistDto {
    private String id;
    private String userId;
    private String  coinId;
    private boolean watchlist;
}
