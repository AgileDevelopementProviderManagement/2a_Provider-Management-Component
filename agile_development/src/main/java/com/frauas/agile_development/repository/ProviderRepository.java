package com.frauas.agile_development.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.frauas.agile_development.model.Provider;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Integer> {



}
