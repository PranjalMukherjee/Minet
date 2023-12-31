package com.minet.portfolioservice.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionBody {
    private int status;
    private String message;
    private long timeStamp;
}
