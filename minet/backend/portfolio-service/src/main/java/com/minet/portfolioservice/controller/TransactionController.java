package com.minet.portfolioservice.controller;

import com.minet.portfolioservice.dto.TransactionDTO;
import com.minet.portfolioservice.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/portfolio/transaction")
public class TransactionController {
    private TransactionService transactionService;

    @Autowired

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public List<TransactionDTO> getAllTransactions() {
        return transactionService.getAllTransaction();
    }

    @PostMapping
    public TransactionDTO saveTransaction(@RequestBody TransactionDTO transactionDTO) {
        return transactionService.saveTransaction(transactionDTO);
    }

    @GetMapping("/{id}")
    public TransactionDTO getTransactionById(@PathVariable String id) {
        return transactionService.getTransactionById(id);
    }

    @PutMapping("/{id}")
    public TransactionDTO updateTransaction(@PathVariable String id, @RequestBody TransactionDTO transactionDTO) {
        return transactionService.updateTransactionById(id, transactionDTO);
    }

    @DeleteMapping("/{id}")
    public String deleteTransaction(@PathVariable String id) {
        return transactionService.deleteTransactionById(id);
    }
}
