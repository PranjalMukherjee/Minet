package com.minet.walletservice.repository;


import com.minet.walletservice.entities.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends JpaRepository<Wallet,String> {
    Wallet findByUserId(String userId);
}
