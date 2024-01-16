package com.frauas.agile_development.repository;

import com.frauas.agile_development.model.Offer;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;
@Repository
public interface OfferRepository extends JpaRepository<Offer, Serializable>{

}
