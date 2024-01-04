package com.frauas.agile_development.model;


import lombok.Data;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;


@Entity
@Table(name = "Provider")
public class Provider implements Serializable {
    @Id
    @GeneratedValue
    private Integer providerId;
    private String providerName;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Domain> domains;

    private String experienceLevel;
    private String technologyLevel;
    private Float price;


    public Provider() {
    }


    public Provider(Integer providerId, String providerName, List<Domain> domains, String experienceLevel, String technologyLevel, Float price) {
        super();
        this.providerId = providerId;
        this.providerName = providerName;
        this.domains = domains;
        this.experienceLevel = experienceLevel;
        this.technologyLevel = technologyLevel;
        this.price = price;
    }


    public Integer getProviderId() {
        return providerId;
    }


    public void setProviderId(Integer providerId) {
        this.providerId = providerId;
    }


    public List<Domain> getDomains() {
        return domains;
    }

    public void setDomains(List<Domain> domains) {
        this.domains = domains;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getExperienceLevel() {
        return experienceLevel;
    }


    public void setExperienceLevel(String experienceLevel) {
        this.experienceLevel = experienceLevel;
    }


    public String getTechnologyLevel() {
        return technologyLevel;
    }


    public void setTechnologyLevel(String technologyLevel) {
        this.technologyLevel = technologyLevel;
    }


    public Float getPrice() {
        return price;
    }


    public void setPrice(Float price) {
        this.price = price;
    }


    @Override
    public int hashCode() {
        return Objects.hash(domains, experienceLevel, price, providerId, providerName, technologyLevel);
    }


    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Provider other = (Provider) obj;
        return Objects.equals(domains, other.domains) && Objects.equals(experienceLevel, other.experienceLevel)
                && Objects.equals(price, other.price) && Objects.equals(providerId, other.providerId)
                && Objects.equals(providerName, other.providerName)
                && Objects.equals(technologyLevel, other.technologyLevel);
    }


    @Override
    public String toString() {
        return "Provider [providerId=" + providerId + ", providerName=" + providerName + ", domains=" + domains
                + ", experienceLevel=" + experienceLevel + ", technologyLevel=" + technologyLevel + ", price=" + price
                + "]";
    }


}
