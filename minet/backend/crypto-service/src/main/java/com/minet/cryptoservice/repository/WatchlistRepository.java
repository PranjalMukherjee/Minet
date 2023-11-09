package com.minet.cryptoservice.repository;

import com.minet.cryptoservice.entity.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WatchlistRepository extends JpaRepository<Watchlist,Integer> {
    List<Watchlist> findByUserId(String id);
    Watchlist findByUserIdAndCoinId(String userId,String coinId);
}
