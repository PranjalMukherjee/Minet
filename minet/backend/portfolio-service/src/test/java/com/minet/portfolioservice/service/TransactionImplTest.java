package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.TransactionDTO;

import com.minet.portfolioservice.entity.CryptoHolding;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.enums.TransactionType;
import com.minet.portfolioservice.exception.ElementNotFound;
import com.minet.portfolioservice.mapper.TransactionMapper;
import com.minet.portfolioservice.repository.CryptoHoldingRepository;
import com.minet.portfolioservice.repository.TransactionRepository;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;
import java.util.stream.Collectors;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
@SpringBootTest
public class TransactionImplTest {
    @InjectMocks
    private TransactionImpl transactionImpl;
    @Mock
    private TransactionRepository transactionRepository;
    @Mock
    private TransactionMapper transactionMapper;
    @Mock
    private CryptoHoldingRepository cryptoHoldingRepository;
    @BeforeEach
    public void setup() {

        MockitoAnnotations.initMocks(this);

    }
@Test
    public void whenGetAllTransaction_thenReturnAllTransaction() throws Exception{
        setup();
    Transaction transaction = new 
            Transaction("1", "Pending", TransactionType.Purchased,new Date(),"1");
    Transaction transaction2 = new
            Transaction("2", "Pending", TransactionType.Purchased,new Date(),"2");
    List<Transaction> transactionList = Arrays.asList(transaction,transaction2);
    when(transactionRepository.findAll()).thenReturn(transactionList);
    List<TransactionDTO> expectedDTOList = transactionList.stream()
            .map(transactionMapper::convertEntityToDTO)
            .collect(Collectors.toList());

    // Act
    List<TransactionDTO> actualDTOList = transactionImpl.getAllTransaction();

    // Assert
    assertEquals(expectedDTOList, actualDTOList);
}
    @Test
    public void whenGetTransactionById_thenReturnTransaction() throws Exception{
        setup();
        Transaction transaction = new
                Transaction("1", "Pending",TransactionType.Purchased,new Date(),"1");
        when(transactionRepository.findById("1")).thenReturn(Optional.of(transaction));
        TransactionDTO result = transactionImpl.getTransactionById("1");

        // Assert
        assertNull(result);
    }
    @Test
    public void whenSaveTransaction_thenReturnSavedTransaction() {
        setup();
        // Arrange
        TransactionDTO transactionDTO = new TransactionDTO("1", "Pending", "Sold", new Date(), "1");
        CryptoHolding cryptoHolding = new CryptoHolding(); // Create a crypto holding for the test

        // Mock repository calls
        when(cryptoHoldingRepository.findById(transactionDTO.getCryptoHoldingId())).thenReturn(Optional.of(cryptoHolding));
        when(transactionMapper.convertDTOToEntity(transactionDTO)).thenReturn(new Transaction()); // Mock entity conversion
        when(transactionRepository.save(any())).thenAnswer(invocation -> {
            Transaction savedTransaction = invocation.getArgument(0);
            savedTransaction.setId("1"); // Set a sample ID for the saved transaction
            return savedTransaction;
        });
        when(transactionMapper.convertEntityToDTO(any())).thenReturn(transactionDTO); // Mock DTO conversion

        // Act
        TransactionDTO savedDTO = transactionImpl.saveTransaction(transactionDTO);

        // Assert
        assertEquals(transactionDTO.getId(), savedDTO.getId());

        // Verify that the repository methods were called correctly
        verify(cryptoHoldingRepository, times(1)).findById(transactionDTO.getCryptoHoldingId());
        verify(transactionRepository, times(1)).save(any());
    }
    @Test
    public void whenUpdateTransactionById_thenReturnUpdatedTransaction() {
        setup();
        // Arrange
        TransactionDTO updatedTransactionDTO = new TransactionDTO("1", "Pending", "Sold", new Date(), "1");
        Transaction existingTransaction = new Transaction("1", "Success", TransactionType.Sold, new Date(), "2");

        // Mock the behavior of cryptoHoldingRepository.findById
        CryptoHolding cryptoHolding = new CryptoHolding(); // Create a crypto holding for the test
        when(cryptoHoldingRepository.findById(updatedTransactionDTO.getCryptoHoldingId())).thenReturn(Optional.of(cryptoHolding));

        when(transactionRepository.findById("1")).thenReturn(Optional.of(existingTransaction));
        when(transactionMapper.convertDTOToEntity(updatedTransactionDTO)).thenReturn(existingTransaction);
        when(transactionRepository.save(existingTransaction)).thenReturn(existingTransaction);
        when(transactionMapper.convertEntityToDTO(existingTransaction)).thenReturn(updatedTransactionDTO);

        // Act
        TransactionDTO result = transactionImpl.updateTransactionById("1", updatedTransactionDTO);

        // Assert
        assertNotNull(result);
        assertEquals(updatedTransactionDTO.getId(), result.getId());
        assertEquals(updatedTransactionDTO.getDate(), result.getDate());
        assertEquals(updatedTransactionDTO.getCryptoHoldingId(), result.getCryptoHoldingId());
        assertEquals(updatedTransactionDTO.getType(), result.getType());
        assertEquals(updatedTransactionDTO.getStatus(), result.getStatus());

        // Verify that the repository methods were called correctly
        verify(transactionRepository, times(1)).findById("1");
        verify(transactionRepository, times(1)).save(existingTransaction);
    }


    @Test
    public void whenDeleteTransactionById_thenReturnSuccessMessage() {
        setup();
        // Arrange
        Transaction transaction = new
                Transaction("1", "Pending", TransactionType.Purchased,new Date(),"1");

        when(transactionRepository.findById("1")).thenReturn(Optional.of(transaction));

        // Act
        String result = transactionImpl.deleteTransactionById("1");

        // Assert
        assertNotNull(result);
        assertEquals("Transaction deleted with id : 1" , result);

        // Verify that the repository methods were called correctly
        verify(transactionRepository, times(1)).findById("1");
        verify(transactionRepository, times(1)).deleteById("1");
    }
    @Test(expected = ElementNotFound.class)
    public void whenDeleteTransactionCryptoByIdWithNonExistingId_thenThrowElementNotFound() {
        setup();
        // Arrange
        String transactionId = "nonExistentId";

        when(transactionRepository.findById(transactionId)).thenReturn(Optional.empty());

        // Act
        transactionImpl.deleteTransactionById(transactionId); // This should throw ElementNotFound

    }
    @Test(expected = ElementNotFound.class)
    public void whenGetTransactionByIdWithNonExistingId_thenThrowElementNotFound() {
        setup();
        // Arrange
        String transactionId = "nonExistentId";

        when(transactionRepository.findById(transactionId)).thenReturn(Optional.empty());

        // Act
        transactionImpl.getTransactionById(transactionId); // This should throw ElementNotFound

    }
    @Test(expected = ElementNotFound.class)
    public void whenUpdateTransactionByIdWithNonExistingId_thenThrowElementNotFound() {
        setup();
        // Arrange
        String transactionId = "nonExistentId";
        TransactionDTO transactionDTO = new TransactionDTO("1","Pending","Sold",new Date(),"1");

        when(transactionRepository.findById(transactionId)).thenReturn(Optional.empty());

        // Act
        transactionImpl.updateTransactionById(transactionId,transactionDTO); // This should throw ElementNotFound

    }
}
