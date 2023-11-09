package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CoinDto;
import com.minet.cryptoservice.entity.Coin;
import com.minet.cryptoservice.repository.CoinRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class GeckoCoinService {
    @Value("${geckoUrl}")
    private String geckoUrl;
    @Autowired
    private CoinRepository coinRepository;

    private ModelMapper modelMapper;

    public GeckoCoinService() {
        modelMapper = new ModelMapper();
    }

    @Scheduled(fixedRate = 720000)
    public void uploadGeckoData(){
        List<CoinDto> geckoCoinDtos = fetchData();
        for (CoinDto geckoCoinDto : geckoCoinDtos ) {
            Coin coin = modelMapper.map(geckoCoinDto,Coin.class);
            coinRepository.save(coin);
        }
    }

    private List<CoinDto> fetchData() {
        String vsCurrency = "usd";
        String urlTemplate =
                UriComponentsBuilder.fromHttpUrl(geckoUrl)
                        .queryParam("vs_currency", vsCurrency)
                        .queryParam("ids", "bitcoin,ethereum,binancecoin,ethereum-classic,tether,cardano,ripple,dogecoin,usd-coin")
                        .encode()
                        .toUriString();

        RestTemplate restTemplate = new RestTemplate();
        CoinDto[] geckoResponse =
                restTemplate.getForObject(urlTemplate, CoinDto[].class);
        return Arrays.asList(geckoResponse);
    }
}
