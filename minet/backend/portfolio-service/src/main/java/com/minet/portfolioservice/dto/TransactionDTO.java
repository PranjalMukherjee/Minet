package com.minet.portfolioservice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.minet.portfolioservice.entity.Transaction;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {
    private String id;
    private String status;
    private String type;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;
    private String cryptoHoldingId;
}
