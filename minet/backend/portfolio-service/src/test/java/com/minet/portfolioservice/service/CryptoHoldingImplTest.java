package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.CryptoHoldingDTO;
import com.minet.portfolioservice.entity.CryptoHolding;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.exception.ElementNotFound;
import com.minet.portfolioservice.mapper.CryptoHoldingMapper;
import com.minet.portfolioservice.repository.CryptoHoldingRepository;
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
public class CryptoHoldingImplTest {
    @InjectMocks
    private CryptoHoldingImpl cryptoHolding;
    @Mock
    private CryptoHoldingRepository cryptoHoldingRepository;
    @Mock
    private CryptoHoldingMapper cryptoHoldingMapper;

    @BeforeEach
    public void setup() {

        MockitoAnnotations.initMocks(this);

    }

    @Test
    public void whenGetAllCryptos_returnAllCryptos() {
        setup();
        CryptoHolding cryptoHolding1 = new CryptoHolding("1", 23, 23.42, new Date(), new Date(), 43.24, "Pranjal", "1", "2", new AbstractList<Transaction>() {
            @Override
            public Transaction get(int index) {
                return null;
            }

            @Override
            public int size() {
                return 0;
            }
        });
        CryptoHolding cryptoHolding2 = new CryptoHolding("2", 23, 23.42, new Date(), new Date(), 43.24, "Pranjal", "1", "2", new AbstractList<Transaction>() {
            @Override
            public Transaction get(int index) {
                return null;
            }

            @Override
            public int size() {
                return 0;
            }
        });
        List<CryptoHolding> cryptoHoldingList = Arrays.asList(cryptoHolding1, cryptoHolding2);
        when(cryptoHoldingRepository.findAll()).thenReturn(cryptoHoldingList);
        List<CryptoHoldingDTO> expectedDTOList = cryptoHoldingList.stream()
                .map(cryptoHoldingMapper::convertEntityToDTO)
                .collect(Collectors.toList());

        // Act
        List<CryptoHoldingDTO> actualDTOList = cryptoHolding.getAllCryptoHolding();

        // Assert
        assertEquals(expectedDTOList, actualDTOList);
    }
    @Test
    public void whenGetCryptoById_thenReturnCrypto() throws Exception{
        setup();
        CryptoHolding cryptoHolding1 = new CryptoHolding("1", 23, 23.42, new Date(), new Date(), 43.24, "Pranjal", "1", "2", new AbstractList<Transaction>() {
            @Override
            public Transaction get(int index) {
                return null;
            }

            @Override
            public int size() {
                return 0;
            }
        });
        when(cryptoHoldingRepository.findById("1")).thenReturn(Optional.of(cryptoHolding1));
        CryptoHoldingDTO result = cryptoHolding.getCryptoHoldingById("1");

        // Assert
        assertNull(result);
    }
    @Test
    public void whenSaveCrypto_thenReturnSavedCrypto() throws Exception{
        setup();
        CryptoHoldingDTO cryptoHoldingDTO = new CryptoHoldingDTO("1", 23,
                23.232,
                new Date(),
                new Date(),
                232.2,
                "rahul",
                "1",
                "1");
        CryptoHolding cryptoHolding1 = new CryptoHolding("1", 23, 23.232, new Date(), new Date(), 232.2, "rahul", "1", "1", new AbstractList<Transaction>() {
            @Override
            public Transaction get(int index) {
                return null;
            }

            @Override
            public int size() {
                return 0;
            }
        });
        when(cryptoHoldingMapper.convertDTOToEntity(cryptoHoldingDTO)).thenReturn(cryptoHolding1);
        when(cryptoHoldingRepository.save(cryptoHolding1)).thenReturn(cryptoHolding1);
        when(cryptoHoldingMapper.convertEntityToDTO(cryptoHolding1)).thenReturn(cryptoHoldingDTO);
        CryptoHoldingDTO savedDTO = cryptoHolding.saveCryptoHolding(cryptoHoldingDTO);
        assertNotNull(savedDTO);
        assertEquals(cryptoHoldingDTO.getId(), savedDTO.getId());

    }
    @Test
    public void whenUpdateCryptoById_thenReturnUpdatedCrypto() {
        setup();
        // Arrange
        String cryptoId = "1";
        CryptoHoldingDTO updatedDTO = new CryptoHoldingDTO(
                cryptoId,
                25, // Updated quantity
                24.5, // Updated purchasePrice
                new Date(), // Updated purchaseDate
                new Date(), // Updated sellDate
                45.0, // Updated sellPrice
                "NewBroker", // Updated brokerName
                "2", // Updated cryptoId
                "3" // Updated userId
        );

        CryptoHolding existingCrypto = new CryptoHolding(
                cryptoId,
                23,
                23.42,
                new Date(),
                new Date(),
                43.24,
                "OldBroker",
                "1",
                "2",
                new ArrayList<>()
        );

        when(cryptoHoldingRepository.findById(cryptoId)).thenReturn(Optional.of(existingCrypto));
        when(cryptoHoldingMapper.convertDTOToEntity(updatedDTO)).thenReturn(existingCrypto); // Return the same entity with updates
        when(cryptoHoldingRepository.save(existingCrypto)).thenReturn(existingCrypto);
        when(cryptoHoldingMapper.convertEntityToDTO(existingCrypto)).thenReturn(updatedDTO);

        // Act
        CryptoHoldingDTO result = cryptoHolding.updateCryptoById(cryptoId, updatedDTO);

        // Assert
        assertNotNull(result);
        assertEquals(updatedDTO.getId(), result.getId());
        assertEquals(updatedDTO.getQuantity(), result.getQuantity(), 0.01);
        assertEquals(updatedDTO.getPurchasePrice(), result.getPurchasePrice(), 0.01);
        assertEquals(updatedDTO.getPurchaseDate(), result.getPurchaseDate());
        assertEquals(updatedDTO.getSellDate(), result.getSellDate());
        assertEquals(updatedDTO.getSellPrice(), result.getSellPrice(), 0.01);
        assertEquals(updatedDTO.getBrokerName(), result.getBrokerName());
        assertEquals(updatedDTO.getCryptoId(), result.getCryptoId());
        assertEquals(updatedDTO.getUserId(), result.getUserId());

        // Verify that the repository methods were called correctly
        verify(cryptoHoldingRepository, times(1)).findById(cryptoId);
        verify(cryptoHoldingRepository, times(1)).save(existingCrypto);
    }
    @Test
    public void whenDeleteCryptoById_thenReturnSuccessMessage() {
        setup();
        // Arrange
        String cryptoId = "1";
        CryptoHolding existingCrypto = new CryptoHolding(
                cryptoId,
                23,
                23.42,
                new Date(),
                new Date(),
                43.24,
                "OldBroker",
                "1",
                "2",
                new ArrayList<>()
        );

        when(cryptoHoldingRepository.findById(cryptoId)).thenReturn(Optional.of(existingCrypto));

        // Act
        String result = cryptoHolding.deleteCryptoById(cryptoId);

        // Assert
        assertNotNull(result);
        assertEquals("Crypto deleted with this id : " + cryptoId, result);

        // Verify that the repository methods were called correctly
        verify(cryptoHoldingRepository, times(1)).findById(cryptoId);
        verify(cryptoHoldingRepository, times(1)).deleteById(cryptoId);
    }
    @Test(expected = ElementNotFound.class)
    public void whenDeleteCryptoByIdWithNonExistingId_thenThrowElementNotFound() {
        setup();
        // Arrange
        String cryptoId = "nonExistentId";

        when(cryptoHoldingRepository.findById(cryptoId)).thenReturn(Optional.empty());

        // Act
        cryptoHolding.deleteCryptoById(cryptoId); // This should throw ElementNotFound


    }
    @Test(expected = ElementNotFound.class)
    public void whenUpdateCryptoByIdWithNonExistingId_thenThrowElementNotFound() {
        setup();
        // Arrange
        String cryptoId = "nonExistentId";

        when(cryptoHoldingRepository.findById(cryptoId)).thenReturn(Optional.empty());

        // Act
        cryptoHolding.updateCryptoById(cryptoId,new CryptoHoldingDTO("2", 23,
                23.232,
               new Date(),
                new Date(),
                232.2,
                "rahul",
                "1",
                "1")); // This should throw ElementNotFound


    }
    @Test(expected = ElementNotFound.class)
    public void whenGetCryptoByIdWithNonExistingId_thenThrowElementNotFound() {
        setup();
        // Arrange
        String cryptoId = "nonExistentId";

        when(cryptoHoldingRepository.findById(cryptoId)).thenReturn(Optional.empty());

        // Act
        cryptoHolding.getCryptoHoldingById(cryptoId); // This should throw ElementNotFound


    }



}
