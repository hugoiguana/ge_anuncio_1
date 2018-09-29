package com.hugoiguana.br.geanuncio1.endpoint;


import com.hugoiguana.br.geanuncio1.models.Ad;
import com.hugoiguana.br.geanuncio1.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("ad")
public class AdEndpoint {

    @Autowired
    private AdRepository adRepository;

    @RequestMapping(method = RequestMethod.GET, path = "list")
    public List<Ad> list(){
        return adRepository.findAll();
    }

}
