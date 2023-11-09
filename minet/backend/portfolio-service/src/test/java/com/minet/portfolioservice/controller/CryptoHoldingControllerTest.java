package com.minet.portfolioservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.portfolioservice.dto.CryptoHoldingDTO;
import com.minet.portfolioservice.service.CryptoHoldingService;
import jakarta.ws.rs.core.MediaType;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.*;

import java.text.SimpleDateFormat;
import java.util.*;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class CryptoHoldingControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Mock
    private CryptoHoldingService cryptoHoldingService;
    @InjectMocks
    private CryptoHoldingController cryptoHoldingController;
    private SimpleDateFormat dateFormat;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(cryptoHoldingController).build();
        dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    }

    @Test
    public void whenGetAllCrypto_returnAllCrypto() throws Exception {
        setUp();
        List<CryptoHoldingDTO> cryptoHoldingDTOList = Arrays.asList(new CryptoHoldingDTO("1", 23,
                23.232,
                dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"),
                232.2,
                "rahul",
                "1",
                "1"),new CryptoHoldingDTO("2", 23,
                23.232,
                dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"),
                232.2,
                "rahul",
                "1",
                "1"));
        when(cryptoHoldingService.getAllCryptoHolding()).thenReturn(cryptoHoldingDTOList);
        mockMvc.perform(get("/api/v1/portfolio/crypto")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2)));
    }
    @Test
    public void whenGetCryptoById_returnCrypto() throws Exception{
        setUp();
        CryptoHoldingDTO cryptoHoldingDTO = new CryptoHoldingDTO("2", 23,
                23.232,
                dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"),
                232.2,
                "rahul",
                "1",
                "1");
        when(cryptoHoldingService.getCryptoHoldingById("2")).thenReturn(cryptoHoldingDTO);
        mockMvc.perform(get("/api/v1/portfolio/crypto/2")).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
    @Test
    public void whenSaveCrypto_returnCrypto() throws  Exception {
        setUp();
        ObjectMapper objectMapper = new ObjectMapper();
        CryptoHoldingDTO cryptoHoldingDTO = new CryptoHoldingDTO("2", 23,
                23.232,
                dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"),
                232.2,
                "rahul",
                "1",
                "1");
        CryptoHoldingDTO savedCryptoHoldingDTO = new CryptoHoldingDTO("2", 23,
                23.232,
                dateFormat.parse("2020-02-22"),
                dateFormat.parse("2020-02-22"),
                232.2,
                "rahul",
                "1",
                "1");
        when(cryptoHoldingService.saveCryptoHolding(cryptoHoldingDTO)).thenReturn(savedCryptoHoldingDTO);
        mockMvc.perform(post("/api/v1/portfolio/crypto").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(cryptoHoldingDTO)))
                .andExpect(status().isOk());
    }
    @Test
    public void whenDeleteCrypto_thenReturnId() throws Exception{
        setUp();
        when(cryptoHoldingService.deleteCryptoById("1")).thenReturn("Crypto deleted with this id : 1");
        mockMvc.perform(delete("/api/v1/portfolio/crypto/1")).andExpect(status().isOk());
    }
    @Test
    public void whenUpdateCrypto_thenReturnCryptoDTO() throws Exception {
        setUp();
        CryptoHoldingDTO updatedCryptoDTO = new CryptoHoldingDTO("1", 23, 23.232, new Date(), new Date(), 232.2, "rahul", "1", "1");
        when(cryptoHoldingService.updateCryptoById("1", updatedCryptoDTO)).thenReturn(updatedCryptoDTO);

        ObjectMapper objectMapper = new ObjectMapper();
        String updatedCryptoJson = objectMapper.writeValueAsString(updatedCryptoDTO);

        mockMvc.perform(put("/api/v1/portfolio/crypto/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedCryptoJson))
                .andExpect(status().isOk());
    }
}
