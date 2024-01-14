package com.frauas.agile_development.model;

import jakarta.persistence.*;

import lombok.Data;

import java.util.List;

@Data
@Entity
public class OfferProvider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToMany(cascade = CascadeType.ALL)
    private List<OfferDomain> offerDomains;
}
