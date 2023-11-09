package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.entity.Coin;
import com.minet.cryptoservice.exception.CoinNotFoundException;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.exception.ErrorResponse;
import com.minet.cryptoservice.repository.CoinRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class CoinServiceTest {

    @Mock
    private CoinRepository coinRepository;

    @InjectMocks
    private CoinServiceImpl coinService;
    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void whenGetAllCoins_returnAllCoins() {
        Coin coin1 = new Coin();
        coin1.setId("1");
        coin1.setSymbol("BTC");
        coin1.setName("Bitcoin");
        coin1.setImage("url_to_image");
        coin1.setCurrentPrice(5000.0);
        coin1.setMarketCap(123456789L);
        coin1.setTotalVolume(1000000.0);
        coin1.setPriceChangePercentage24h(5.0);
        coin1.setCirculatingSupply(800000.0);
        coin1.setTotalSupply(1000000.0);
        Coin coin2 =  new Coin("2", "ETH", "Ethereum", "url_to_image", 300.0, 987654321L, 500000.0, 2.5, 700000.0, 1000000.0);

        List<Coin> coins = Arrays.asList(coin1, coin2);

        when(coinRepository.findAll()).thenReturn(coins);

        List<CoinDto> coinDtos = coinService.getAllCoins();

        assertEquals(2, coinDtos.size());

        verify(coinRepository, times(1)).findAll();
    }

    @Test
    void givenCoinId_whenGetById_returnCoin() {
        Coin coin =  new Coin("1", "BTC", "Bitcoin", "url_to_image", 5000.0, 123456789L, 1000000.0, 5.0, 800000.0, 1000000.0);


        when(coinRepository.findById("1")).thenReturn(Optional.of(coin));

        coinService.getCoinById("1");

        verify(coinRepository, times(1)).findById("1");
    }

    @Test
    void whenGetAllCoins_returnEntityPersistenceException() {
        when(coinRepository.findAll()).thenThrow(EntityPersistenceException.class);
        EntityPersistenceException exception = assertThrows(EntityPersistenceException.class, () -> coinService.getAllCoins());
        assertEquals("Error while fetching coins",exception.getMessage());
        verify(coinRepository, times(1)).findAll();
    }

    @Test
    void givenInvalidCoinId_WhenGetById_thenThrowException(){
        CoinNotFoundException exception = assertThrows(CoinNotFoundException.class, () -> {
            coinService.getCoinById("1");
        });
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMessage("Coin not found with id 1");
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());

        assertEquals(errorResponse.getMessage(),exception.getMessage());
    }
}
