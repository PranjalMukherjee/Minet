package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.CryptoHoldingDTO;
import com.minet.portfolioservice.entity.CryptoHolding;
import com.minet.portfolioservice.exception.ElementNotFound;
import com.minet.portfolioservice.mapper.CryptoHoldingMapper;
import com.minet.portfolioservice.repository.CryptoHoldingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CryptoHoldingImpl implements CryptoHoldingService {
    private CryptoHoldingRepository cryptoHoldingRepository;
    private CryptoHoldingMapper cryptoHoldingMapper;
    private String notFoundMessage = "Crypto not found by this id : ";

    @Autowired
    public CryptoHoldingImpl(CryptoHoldingRepository cryptoHoldingRepository, CryptoHoldingMapper cryptoHoldingMapper) {
        this.cryptoHoldingRepository = cryptoHoldingRepository;
        this.cryptoHoldingMapper = cryptoHoldingMapper;
    }


    public List<CryptoHoldingDTO> getAllCryptoHolding() {
        List<CryptoHolding> cryptoHoldingList = cryptoHoldingRepository.findAll();
        return cryptoHoldingList.stream()
                .map(cryptoHoldingMapper::convertEntityToDTO)
                .collect(Collectors.toList());
    }


    public CryptoHoldingDTO getCryptoHoldingById(String id) {
        CryptoHolding cryptoHolding = cryptoHoldingRepository.findById(id)
                .orElseThrow(() -> new ElementNotFound(notFoundMessage+ id));
        return cryptoHoldingMapper.convertEntityToDTO(cryptoHolding);
    }


    public CryptoHoldingDTO saveCryptoHolding(CryptoHoldingDTO cryptoHoldingDTO) {
        CryptoHolding cryptoHolding = cryptoHoldingMapper.convertDTOToEntity(cryptoHoldingDTO);
        CryptoHolding savedCrypto = cryptoHoldingRepository.save(cryptoHolding);
        return cryptoHoldingMapper.convertEntityToDTO(savedCrypto);
    }

    @Override
    public CryptoHoldingDTO updateCryptoById(String id,CryptoHoldingDTO cryptoHoldingDTO) {
        CryptoHolding cryptoHolding = cryptoHoldingRepository.findById(id)
                .orElseThrow(() -> new ElementNotFound(notFoundMessage+ id));
        cryptoHolding.setBrokerName(cryptoHoldingDTO.getBrokerName());
        cryptoHolding.setCryptoId(cryptoHoldingDTO.getCryptoId());
        cryptoHolding.setQuantity(cryptoHoldingDTO.getQuantity());
        cryptoHolding.setPurchaseDate(cryptoHoldingDTO.getPurchaseDate());
        cryptoHolding.setPurchasePrice(cryptoHoldingDTO.getPurchasePrice());
        cryptoHolding.setSellDate(cryptoHoldingDTO.getSellDate());
        cryptoHolding.setSellPrice(cryptoHoldingDTO.getSellPrice());
        cryptoHolding.setUserId(cryptoHoldingDTO.getUserId());
        CryptoHolding updatedCrypto = cryptoHoldingRepository.save(cryptoHolding);
        return cryptoHoldingMapper.convertEntityToDTO(updatedCrypto);
    }

    @Override
    public String deleteCryptoById(String id) {
        CryptoHolding cryptoHolding=cryptoHoldingRepository.findById(id)
                .orElseThrow(() -> new ElementNotFound(notFoundMessage+ id));
        cryptoHoldingRepository.deleteById(id);
        return "Crypto deleted with this id : "+ cryptoHolding.getId();
    }
}
