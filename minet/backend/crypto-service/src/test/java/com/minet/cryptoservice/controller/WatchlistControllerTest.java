package com.minet.cryptoservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.cryptoservice.dto.WatchlistDto;
import com.minet.cryptoservice.service.WatchlistService;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = WatchlistController.class)
class WatchlistControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private WatchlistService watchlistService;
    @Autowired
    private WatchlistController watchlistController;

    @Test
    void givenUserId_whenGetByUserId_returnWatchlists() throws Exception {
        String  userId = "1";
        List<WatchlistDto> watchlistDtos = Arrays.asList(
                new WatchlistDto("1", userId, "1", true),
                new WatchlistDto("2", userId, "2", false)
        );

        when(watchlistService.getByUserId(userId)).thenReturn(watchlistDtos);

        mockMvc.perform(get("/api/v1/crypto/watchlist")
                        .param("userId", userId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is("1")))
                .andExpect(jsonPath("$[1].id", is("2")))
                .andExpect(jsonPath("$[0].userId", is(userId)))
                .andExpect(jsonPath("$[1].userId", is(userId)));
    }

    @Test
    void givenWatchlistDto_whenSaveWatchlist_thenReturnWatchlist() throws Exception {
        WatchlistDto watchlistDto = new WatchlistDto("1", "1", "1", true);
        WatchlistDto savedWatchlistDto = new WatchlistDto("1", "1", "1", true);

        ObjectMapper objectMapper = new ObjectMapper();

        when(watchlistService.saveWatchlist(watchlistDto)).thenReturn(savedWatchlistDto);

        mockMvc.perform(post("/api/v1/crypto/watchlist")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(watchlistDto)))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id", is("1")))
                .andExpect(jsonPath("$.userId", is("1")));
    }
}
