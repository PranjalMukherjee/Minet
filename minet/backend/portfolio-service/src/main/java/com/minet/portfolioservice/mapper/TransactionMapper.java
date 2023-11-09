package com.minet.portfolioservice.mapper;

import com.minet.portfolioservice.dto.TransactionDTO;
import com.minet.portfolioservice.entity.Transaction;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class TransactionMapper {
    private final ModelMapper modelMapper;



    public TransactionMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public TransactionDTO convertEntityToDTO(Transaction Transaction) {
        return modelMapper.map(Transaction, TransactionDTO.class);
    }

    public Transaction convertDTOToEntity(TransactionDTO TransactionDTO) {
        return modelMapper.map(TransactionDTO, Transaction.class);
    }
}
