package com.minet.portfolioservice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CryptoHoldingDTO {

    private String id;
    private int quantity;
    private double purchasePrice;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date purchaseDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date sellDate;
    private double sellPrice;
    private String brokerName;
    private String userId;
    private String cryptoId;
}
