package com.minet.portfolioservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;


import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "crypto_holding")
public class CryptoHolding {
    @UuidGenerator
    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "purchase_price")
    private double purchasePrice;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "purchase_date")
    private Date purchaseDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "sell_date")
    private Date sellDate;
    @Column(name = "sell_price")
    private double sellPrice;
    @Column(name = "broker_name")
    private String brokerName;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "crypto_id")
    private String cryptoId;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "crypto_holding_id")
    private List<Transaction> transactionList;
}
