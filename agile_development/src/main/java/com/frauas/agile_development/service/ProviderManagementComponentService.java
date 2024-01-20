package com.frauas.agile_development.service;

import java.util.List;
import java.util.Optional;

import com.frauas.agile_development.model.OfferRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.frauas.agile_development.model.Provider;
import com.frauas.agile_development.repository.ProviderRepository;

@Service
public class ProviderManagementComponentService {

	@Autowired
	private ProviderRepository providerRepository;

	public Provider saveProvider(Provider provider) {
		return providerRepository.save(provider);
	}

	public List<Provider> getProviders() {
		return providerRepository.findAll();
	}

	public Provider getProviderById(int id) {
		return providerRepository.findById(id).orElse(null);
	}

    public Provider updateProviderWithMasterAgreement(int id, OfferRole updatedproviderinoffer)throws Exception{
		Optional<Provider> isInDb = providerRepository.findById(id);


		if (isInDb.isPresent()) {
			Provider newProvider = isInDb.get();

			//TODO add price to the provider looping the offer price of role
			// newProvider.getDomains().get(0).getRoles().get(0).setRoleprice();
			//newProvider.setMasterAgreementTypeId(updatedproviderinoffer.getOffermasterids());
			newProvider.setAccepted("accepted");

			return providerRepository.save(newProvider);
		}
		else {
			return null;
		}
	}

	public Provider updateProviderdetails(int id, Provider updatedprovider) {
		Optional<Provider> isInDb = providerRepository.findById(id);
		if (isInDb.isPresent()) {
			Provider newProvider = isInDb.get();
//TODO if required to implementthe API
			return providerRepository.save(newProvider);
		}
		else {
			return null;
		}
	}
}