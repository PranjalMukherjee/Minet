package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.TransactionDTO;

import java.util.List;

public interface TransactionService {
    public List<TransactionDTO> getAllTransaction();
    public TransactionDTO getTransactionById(String id);
    public  TransactionDTO saveTransaction(TransactionDTO transactionDTO);

    public TransactionDTO updateTransactionById(String id, TransactionDTO transactionDTO);

    public String deleteTransactionById(String id);
}
