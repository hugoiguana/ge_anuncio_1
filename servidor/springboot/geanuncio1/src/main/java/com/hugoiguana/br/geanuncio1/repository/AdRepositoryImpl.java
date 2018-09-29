package com.hugoiguana.br.geanuncio1.repository;

import com.hugoiguana.br.geanuncio1.models.Ad;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AdRepositoryImpl implements AdRepository {

    @Override
    public List<Ad> findAll() {

        ArrayList<Ad> adds = new ArrayList<>();

        adds.add(new Ad(1, "Nootbook intel i7", new BigDecimal(1600), "https://a-static.mlcdn.com.br/618x463/notebook-lenovo-ideapad-320-intel-celeron-n3350-4gb-1tb-led-156-windows-10/magazineluiza/218313700/ede357e0d01c0b9c8c4a60fe533526fa.jpg"));
        adds.add(new Ad(2, "Celta life 4p 2008", new BigDecimal(12000), "https://img.olx.com.br/images/64/644821037823977.jpg"));
        adds.add(new Ad(3, "Tv samsung 42 polegagas em ótimo estado", new BigDecimal(850), "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/8806088790473_4.jpg"));
        adds.add(new Ad(4, "Playstation 4 - 2 anos de uso", new BigDecimal(700), "https://s2.glbimg.com/kVWErTnOwfao3Iq9PmqWKo7d8I4=/0x600/s.glbimg.com/po/tt2/f/original/2015/10/30/playstation-4-funcionalidades-melhores-xbox-one.jpg"));
        adds.add(new Ad(5, "Poltrona do papai super confortável", new BigDecimal(680), "https://img1.madeiramadeira.com.br/prd/imperio-estofados/192108/poltrona-do-papai-reclin-vel-gelo-198_desc.jpg"));

        return adds;
    }

}
