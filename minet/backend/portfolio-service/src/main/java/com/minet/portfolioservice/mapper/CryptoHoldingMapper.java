package com.minet.portfolioservice.mapper;

import com.minet.portfolioservice.dto.CryptoHoldingDTO;
import com.minet.portfolioservice.entity.CryptoHolding;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class CryptoHoldingMapper {
    private final ModelMapper modelMapper;



    public CryptoHoldingMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public CryptoHoldingDTO convertEntityToDTO(CryptoHolding CryptoHolding) {
        return modelMapper.map(CryptoHolding, CryptoHoldingDTO.class);
    }

    public CryptoHolding convertDTOToEntity(CryptoHoldingDTO CryptoHoldingDTO) {
        return modelMapper.map(CryptoHoldingDTO, CryptoHolding.class);
    }
}
