package com.minet.portfolioservice.repository;

import com.minet.portfolioservice.entity.CryptoHolding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CryptoHoldingRepository extends JpaRepository<CryptoHolding,String> {
}
