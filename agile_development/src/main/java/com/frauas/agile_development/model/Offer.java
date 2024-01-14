package com.frauas.agile_development.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Offer_Table")
public class Offer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    private OfferProvider offerProvider;
    private List<Integer> offermasterids;
    private boolean offered;
    private String providerrating;
    private String userName;
    private String userType;

    public Offer() {
    }

    public Offer(Long id, OfferProvider offerProvider, List<Integer> offermasterids, boolean offered, String providerrating, String userName, String userType) {
        this.id = id;
        this.offerProvider = offerProvider;
        this.offermasterids = offermasterids;
        this.offered = offered;
        this.providerrating = providerrating;
        this.userName = userName;
        this.userType = userType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Integer> getOffermasterids() {
        return offermasterids;
    }

    public void setOffermasterids(List<Integer> offermasterids) {
        this.offermasterids = offermasterids;
    }


    public String getProviderrating() {
        return providerrating;
    }

    public void setProviderrating(String providerrating) {
        this.providerrating = providerrating;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public OfferProvider getOfferProvider() {
        return offerProvider;
    }

    public void setOfferProvider(OfferProvider offerProvider) {
        this.offerProvider = offerProvider;
    }

    public boolean isOffered() {
        return offered;
    }

    public void setOffered(boolean offered) {
        this.offered = offered;
    }
}
