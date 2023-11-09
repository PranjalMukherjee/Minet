package com.minet.portfolioservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.minet.portfolioservice.dto.TransactionDTO;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.service.TransactionService;
import jakarta.persistence.Access;
import jakarta.ws.rs.core.MediaType;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class TransactionControllerTest
{
    @Autowired
    private MockMvc mockMvc;
    @Mock
    private TransactionService transactionService;
    @InjectMocks
    private TransactionController transactionController;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();

    }
    @Test
    public void whenGetAllTransaction_returnAllTransaction() throws Exception {
        setUp();
        List<TransactionDTO> transactionDTOList = Arrays.asList(new TransactionDTO("1","Pending","Sold",new Date(),"1"));
        when(transactionService.getAllTransaction()).thenReturn(transactionDTOList);
        mockMvc.perform(get("/api/v1/portfolio/transaction")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(1)));
    }
    @Test
    public void whenGetTransactionById_returnTransaction() throws Exception{
        setUp();
        TransactionDTO transactionDTO = new TransactionDTO("1","Pending","Sold",new Date(),"1");
        when(transactionService.getTransactionById("1")).thenReturn(transactionDTO);
        mockMvc.perform(get("/api/v1/portfolio/transaction/1")).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
    @Test
    public void whenSaveTransaction_returnTransaction() throws  Exception {
        setUp();
        ObjectMapper objectMapper = new ObjectMapper();
        TransactionDTO transactionDTO = new TransactionDTO("1","Pending","Sold",new Date(),"1");
        TransactionDTO savedTransactionDTO = new TransactionDTO("1","Pending","Sold",new Date(),"1");
        when(transactionService.saveTransaction(transactionDTO)).thenReturn(savedTransactionDTO);
        mockMvc.perform(post("/api/v1/portfolio/transaction/").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(transactionDTO)))
                .andExpect(status().isOk());
    }
    @Test
    public void whenDeleteTransaction_thenReturnId() throws Exception{
        setUp();
        when(transactionService.deleteTransactionById("1")).thenReturn("Transaction deleted with this id : 1");
        mockMvc.perform(delete("/api/v1/portfolio/transaction/1")).andExpect(status().isOk());
    }
    @Test
    public void whenUpdateTransaction_thenReturnTransactionDTO() throws Exception {
        setUp();
        TransactionDTO updatedTransactionDTO = new TransactionDTO("1","Pending","Sold",new Date(),"1");
        when(transactionService.updateTransactionById("1", updatedTransactionDTO)).thenReturn(updatedTransactionDTO);

        ObjectMapper objectMapper = new ObjectMapper();
        String updatedTransactionJson = objectMapper.writeValueAsString(updatedTransactionDTO);

        mockMvc.perform(put("/api/v1/portfolio/transaction/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedTransactionJson))
                .andExpect(status().isOk());
    }
}
