package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.CryptoHoldingDTO;


import java.util.List;

public interface CryptoHoldingService {
    public List<CryptoHoldingDTO> getAllCryptoHolding();
    public CryptoHoldingDTO getCryptoHoldingById(String id);
    public CryptoHoldingDTO saveCryptoHolding(CryptoHoldingDTO cryptoHoldingDTO);
    public CryptoHoldingDTO updateCryptoById(String id,CryptoHoldingDTO cryptoHoldingDTO);
    public String deleteCryptoById(String id);
}
