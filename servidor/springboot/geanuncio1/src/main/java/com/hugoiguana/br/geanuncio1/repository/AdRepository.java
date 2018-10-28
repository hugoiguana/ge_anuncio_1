package com.hugoiguana.br.geanuncio1.repository;

import com.hugoiguana.br.geanuncio1.models.Ad;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdRepository extends CrudRepository<Ad, Integer>, CustomizedAdRepository {

    Ad findFirstByOrderByDescriptionAsc();

    //public List<Ad> findAll();
}
