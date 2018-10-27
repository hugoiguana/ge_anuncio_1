package com.hugoiguana.br.geanuncio1.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@AttributeOverride(name="id", column=@Column(name="user_id"))
@Table(name = "user_ad")
public class User extends MyEntity {

    @Column(nullable=false, length=100)
    private String fullName;

    @Column(nullable=false, length=50)
    private String nickName;

    @Column(nullable=false)
    private LocalDate dt_age;

    @Column(nullable=false)
    private EGender gender;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

}
