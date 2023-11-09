package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.exception.CoinNotFoundException;
import com.minet.cryptoservice.exception.EntityPersistenceException;
import com.minet.cryptoservice.service.CoinService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = CoinController.class)
class CoinControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private CoinService coinService;
    @Autowired
    private CoinController coinController;

    @Test
    void whenGetAllCoins_returnAllCoins() throws Exception {
        List<CoinDto> coinDtos = Arrays.asList(
                new CoinDto("1", "BTC", "Bitcoin", "url_to_image", 5000.0, 123456789L, 1000000.0, 5.0, 800000.0, 1000000.0),
                new CoinDto("2", "ETH", "Ethereum", "url_to_image", 300.0, 987654321L, 500000.0, 2.5, 700000.0, 1000000.0)
        );
        when(coinService.getAllCoins()).thenReturn(coinDtos);

        mockMvc.perform(get("/api/v1/crypto/coins"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void givenCoinId_whenGetById_returnCoin() throws Exception {
        CoinDto coinDto = new CoinDto("1", "BTC", "Bitcoin", "url_to_image", 5000.0, 123456789L, 1000000.0, 5.0, 800000.0, 1000000.0);

        when(coinService.getCoinById("1")).thenReturn(coinDto);

        mockMvc.perform(get("/api/v1/crypto/coins/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.name", is("Bitcoin")));
    }

    @Test
    void whenGetAllCoins_returnException() throws Exception {
        when(coinService.getAllCoins()).thenThrow(EntityPersistenceException.class);
        mockMvc.perform(get("/api/v1/crypto/coins"));
    }


    @Test
    void givenCoinId_whenGetById_returnException() throws Exception {
        when(coinService.getCoinById("1")).thenThrow(CoinNotFoundException.class);
        mockMvc.perform(get("/api/v1/crypto/coins/1"));
    }
}
