package com.minet.walletservice.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WalletDto {

    private String id;
    @NotEmpty
    @NotNull
    private String userId;
    @NotNull
    private Double totalBalance;
    private Timestamp lastModified;
}
