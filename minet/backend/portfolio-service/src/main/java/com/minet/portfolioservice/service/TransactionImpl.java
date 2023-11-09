package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.TransactionDTO;

import com.minet.portfolioservice.entity.CryptoHolding;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.exception.ElementNotFound;
import com.minet.portfolioservice.mapper.TransactionMapper;
import com.minet.portfolioservice.repository.CryptoHoldingRepository;
import com.minet.portfolioservice.repository.TransactionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TransactionImpl implements TransactionService {
    private TransactionRepository transactionRepository;
    private TransactionMapper transactionMapper;
    private CryptoHoldingRepository cryptoHoldingRepository;
    private String notFoundTransaction = "No transaction found by this id : ";

    @Autowired
    public TransactionImpl(TransactionRepository transactionRepository, TransactionMapper transactionMapper, CryptoHoldingRepository cryptoHoldingRepository) {
        this.transactionRepository = transactionRepository;
        this.transactionMapper = transactionMapper;
        this.cryptoHoldingRepository = cryptoHoldingRepository;
    }


    public List<TransactionDTO> getAllTransaction() {
        List<Transaction> transactionList = transactionRepository.findAll();
        return transactionList.stream()
                .map(transactionMapper::convertEntityToDTO)
                .collect(Collectors.toList());
    }


    public TransactionDTO getTransactionById(String id) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ElementNotFound(notFoundTransaction + id));
        return transactionMapper.convertEntityToDTO(transaction);
    }


    public TransactionDTO saveTransaction(TransactionDTO transactionDTO) {
        CryptoHolding cryptoHolding=cryptoHoldingRepository.findById(transactionDTO.getCryptoHoldingId()).orElseThrow(() ->
                new ElementNotFound("No crypto found by this id : " + transactionDTO.getCryptoHoldingId()));
        Transaction transaction = transactionMapper.convertDTOToEntity(transactionDTO);
        Transaction savedTransaction = transactionRepository.save(transaction);

        return transactionMapper.convertEntityToDTO(savedTransaction);
    }

    @Override
    public TransactionDTO updateTransactionById(String id, TransactionDTO transactionDTO) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ElementNotFound(notFoundTransaction + id));
        CryptoHolding cryptoHolding=cryptoHoldingRepository.findById(transactionDTO.getCryptoHoldingId()).orElseThrow(() ->
                new ElementNotFound("No crypto found by this id : " + transactionDTO.getCryptoHoldingId()));
        transaction.setDate(transactionDTO.getDate());
        transaction.setType(transactionMapper.convertDTOToEntity(transactionDTO).getType());
        transaction.setStatus(transactionDTO.getStatus());
        transaction.setCryptoHoldingId(transactionDTO.getCryptoHoldingId());
        transactionRepository.save(transaction);
        return transactionMapper.convertEntityToDTO(transaction);
    }

    @Override
    public String deleteTransactionById(String id) {
        Transaction transaction=transactionRepository.findById(id)
                .orElseThrow(() -> new ElementNotFound(notFoundTransaction + id));
        transactionRepository.deleteById(id);
        return "Transaction deleted with id : " + transaction.getId();
    }
}
