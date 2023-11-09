package com.minet.cryptoservice.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;


@Entity
@Table(name = "crypto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Coin {
    @Id
    @Column
    private String  id;
    @Column
    private String symbol;
    @Column
    private String name;
    @Column
    private String image;
    @Column
    private double currentPrice;
    @Column
    private long marketCap;
    @Column
    private double totalVolume;
    @Column
    private double priceChangePercentage24h;
    @Column
    private double circulatingSupply;
    @Column
    private double totalSupply;

}
