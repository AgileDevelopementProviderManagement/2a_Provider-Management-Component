package com.frauas.agile_development.service;

import com.frauas.agile_development.model.Offer;
import com.frauas.agile_development.model.StandardDomains;
import com.frauas.agile_development.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    @Autowired
    OfferRepository offerRepository;

    public Offer saveOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public List<Offer> getallOffers() {
        return offerRepository.findAll();
    }
}
