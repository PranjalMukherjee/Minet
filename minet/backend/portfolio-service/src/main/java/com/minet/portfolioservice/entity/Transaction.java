package com.minet.portfolioservice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.minet.portfolioservice.enums.TransactionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transaction")
public class Transaction {

    @UuidGenerator
    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "status")
    private String status;
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private TransactionType type;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "transaction_date")
    private Date date;
    @Column(name = "crypto_holding_id")
    private String cryptoHoldingId;
}
