package com.minet.cryptoservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CoinDto {
    private String id;
    private String symbol;
    private String name;
    private String image;
    @JsonProperty("current_price")
    private double currentPrice;
    @JsonProperty("market_cap")
    private long marketCap;
    @JsonProperty("total_volume")
    private double totalVolume;
    @JsonProperty("price_change_percentage_24h")
    private double priceChangePercentage24h;
    @JsonProperty("circulating_supply")
    private double circulatingSupply;
    @JsonProperty("total_supply")
    private double totalSupply;
}
