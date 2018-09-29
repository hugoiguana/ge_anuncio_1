package com.hugoiguana.br.geanuncio1.repository;

import com.hugoiguana.br.geanuncio1.models.Ad;

import java.util.List;

public interface AdRepository {

    public List<Ad> findAll();
}
