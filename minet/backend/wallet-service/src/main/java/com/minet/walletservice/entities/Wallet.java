package com.minet.walletservice.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table
public class Wallet {

    @Id
    @UuidGenerator
    private String id;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "balance")
    private Double totalBalance;
    @Column(name = "last_modified_date")
    private Timestamp lastModified;


}
