package com.minet.cryptoservice.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Watchlist {
    @Id
    @UuidGenerator
    private String id;
    private String userId;
    @ManyToOne
    @JoinColumn(name = "crypto_id",referencedColumnName = "id")
    private Coin coin;
    private boolean watchlist;

}
