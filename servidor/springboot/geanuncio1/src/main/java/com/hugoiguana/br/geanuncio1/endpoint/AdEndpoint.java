package com.hugoiguana.br.geanuncio1.endpoint;


import com.hugoiguana.br.geanuncio1.models.Ad;
import com.hugoiguana.br.geanuncio1.repository.AdRepository;
import com.hugoiguana.br.geanuncio1.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("ad")
public class AdEndpoint {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    private AdService adService;

    @RequestMapping(method = RequestMethod.GET, path = "list")
    public List<Ad> list(){

        //insertSomeAdsToTestOny();

        Ad ads2 = adRepository.findFirstByOrderByDescriptionAsc();

        try {
            adService.insertSomeAdsTestTransation();
        } catch(Exception e) {
            e.printStackTrace();
        }

        List<Ad> ads = new ArrayList<>();
        adRepository.findAll().forEach(ad -> ads.add(ad));
        return ads;
    }

    private void insertSomeAdsToTestOny() {

        Ad ad1 = Ad.builder()
                .description("Nootbook intel i7")
                .value(new BigDecimal(1600))
                .urlImage("https://a-static.mlcdn.com.br/618x463/notebook-lenovo-ideapad-320-intel-celeron-n3350-4gb-1tb-led-156-windows-10/magazineluiza/218313700/ede357e0d01c0b9c8c4a60fe533526fa.jpg")
                .build();

        Ad ad2 = Ad.builder()
                .description("Celta life 4p 2008")
                .value(new BigDecimal(12000))
                .urlImage("https://img.olx.com.br/images/64/644821037823977.jpg")
                .build();

        Ad ad3 = Ad.builder()
                .description("Tv samsung 42 polegagas em ótimo estado")
                .value(new BigDecimal(850))
                .urlImage("https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/8806088790473_4.jpg")
                .build();

        Ad ad4 = Ad.builder()
                .description("Playstation 4 - 2 anos de uso")
                .value(new BigDecimal(700))
                .urlImage("https://s2.glbimg.com/kVWErTnOwfao3Iq9PmqWKo7d8I4=/0x600/s.glbimg.com/po/tt2/f/original/2015/10/30/playstation-4-funcionalidades-melhores-xbox-one.jpg")
                .build();

        Ad ad5 = Ad.builder()
                .description("Poltrona do papai super confortável")
                .value(new BigDecimal(680))
                .urlImage("https://img1.madeiramadeira.com.br/prd/imperio-estofados/192108/poltrona-do-papai-reclin-vel-gelo-198_desc.jpg")
                .build();

        adRepository.save(ad1);
        adRepository.save(ad2);
        adRepository.save(ad3);
        adRepository.save(ad4);
        adRepository.save(ad5);
    }

}
