package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.entity.Coin;
import com.minet.cryptoservice.entity.Watchlist;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.repository.WatchlistRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class WatchlistServiceTest {

    @Mock
    private WatchlistRepository watchlistRepository;

    @InjectMocks
    private WatchlistServiceImpl watchlistService;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void init() {
        MockitoAnnotations.openMocks(this);

    }

    @Test
    void givenUserId_whenGetByUserId_returnWatchlists() {
        Watchlist watchlist1 = new Watchlist();
        watchlist1.setId("1");
        watchlist1.setUserId("1");
        watchlist1.setCoin(new Coin());
        watchlist1.setWatchlist(true);

        Watchlist watchlist2 = new Watchlist("2", "1", new Coin(),false);
        List<Watchlist> watchlists = Arrays.asList(watchlist1, watchlist2);

        when(watchlistRepository.findByUserId("1")).thenReturn(watchlists);

        List<WatchlistDto> watchlistDtos = watchlistService.getByUserId("1");

        assertEquals(2, watchlistDtos.size());

        verify(watchlistRepository, times(1)).findByUserId("1");
    }

    @Test
    void givenUserId_whenGetByUserId_returnEntityPersistenceException() {
        when(watchlistRepository.findByUserId("1")).thenThrow(EntityPersistenceException.class);

        assertThrows(EntityPersistenceException.class, () -> watchlistService.getByUserId("1"));

        verify(watchlistRepository, times(1)).findByUserId("1");
    }

    @Test
    void testSaveWatchlist() {
        WatchlistDto watchlistDto = new WatchlistDto("1", "userId", "coinId", true);
        Coin coin = new Coin();
        coin.setId("coinId");
        coin.setSymbol("BTC");
        coin.setName("Bitcoin");

        Watchlist watchlistEntity = new Watchlist("1", "userId", coin, true);

        // Mocking behavior
        when(modelMapper.map(watchlistDto, Watchlist.class)).thenReturn(watchlistEntity);
        when(watchlistRepository.save(any(Watchlist.class))).thenReturn(watchlistEntity);
        WatchlistDto expectedResponseDto = new WatchlistDto("1", "userId", "coinId", true);
        when(modelMapper.map(watchlistEntity, WatchlistDto.class)).thenReturn(expectedResponseDto);

        // When
        WatchlistDto savedWatchlistDto = watchlistService.saveWatchlist(watchlistDto);

        // Then
        assertNotNull(savedWatchlistDto);
        assertEquals("1", savedWatchlistDto.getId());
        assertEquals("userId", savedWatchlistDto.getUserId());
        assertEquals("coinId", savedWatchlistDto.getCoinId());
        assertTrue(savedWatchlistDto.isWatchlist());
        verify(watchlistRepository, times(1)).save(any(Watchlist.class));
    }

    @Test
    void testSaveWatchlistWithException() {
        // Given
        WatchlistDto watchlistDto = new WatchlistDto("1", "userId", "coinId", true);

        // Mocking behavior to throw an exception when saving the entity
        when(modelMapper.map(watchlistDto, Watchlist.class)).thenReturn(new Watchlist());
        when(watchlistRepository.save(any(Watchlist.class))).thenThrow(new EntityPersistenceException("Failed to persist entity"));

        assertThrows(EntityPersistenceException.class, () -> watchlistService.saveWatchlist(watchlistDto));
    }



}
