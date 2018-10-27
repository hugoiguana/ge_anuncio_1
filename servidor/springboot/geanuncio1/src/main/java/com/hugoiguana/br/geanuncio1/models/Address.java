package com.hugoiguana.br.geanuncio1.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@AttributeOverride(name="id", column=@Column(name="address_id"))
public class Address extends MyEntity {

    @Column(nullable=false)
    private ECountry country;

    @Column(nullable=false)
    private EState state;

    @Column(nullable=false)
    private ECity city;

    @Column(nullable=false)
    private String street;

    @Column(nullable=true)
    private String zip_code;

    @OneToMany(mappedBy = "address")
    private List<User> users;
}
