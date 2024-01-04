package com.frauas.agile_development.service;

import java.util.List;

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

}