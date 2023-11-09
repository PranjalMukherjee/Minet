package com.minet.portfolioservice.controller;

import com.minet.portfolioservice.dto.CryptoHoldingDTO;
import com.minet.portfolioservice.service.CryptoHoldingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/portfolio/crypto")
public class CryptoHoldingController {
    private CryptoHoldingService cryptoHoldingService;

    @Autowired

    public CryptoHoldingController(CryptoHoldingService cryptoHoldingService) {
        this.cryptoHoldingService = cryptoHoldingService;
    }

    @GetMapping
    public List<CryptoHoldingDTO> getAllCryptos() {
        return cryptoHoldingService.getAllCryptoHolding();
    }

    @PostMapping
    public CryptoHoldingDTO saveCrypto(@RequestBody CryptoHoldingDTO cryptoHoldingDTO) {
        return cryptoHoldingService.saveCryptoHolding(cryptoHoldingDTO);
    }

    @GetMapping("/{id}")
    public CryptoHoldingDTO getCryptoById(@PathVariable String id) {
        return cryptoHoldingService.getCryptoHoldingById(id);
    }

    @PutMapping("/{id}")
    public CryptoHoldingDTO updateCrypto(@PathVariable String id, @RequestBody CryptoHoldingDTO cryptoHoldingDTO) {
        return cryptoHoldingService.updateCryptoById(id, cryptoHoldingDTO);
    }

    @DeleteMapping("/{id}")
    public String deleteCrypto(@PathVariable String id) {
        return cryptoHoldingService.deleteCryptoById(id);
    }

}
