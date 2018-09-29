package com.hugoiguana.br.geanuncio1.models;

import java.math.BigDecimal;

public class Ad extends Entity{

    String description;
    BigDecimal value;
    String urlImage;

    public Ad(Integer id, String description, BigDecimal value, String urlImage) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.urlImage = urlImage;
    }

    public Ad() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }
}
