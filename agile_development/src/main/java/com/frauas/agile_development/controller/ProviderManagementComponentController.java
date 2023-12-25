package com.frauas.agile_development.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.frauas.agile_development.model.Provider;
import com.frauas.agile_development.service.ProviderManagementComponentService;

@RestController
public class ProviderManagementComponentController {

    @Autowired
    private ProviderManagementComponentService proivderManagementComponentService;

    @PostMapping("/addProvider")
    public Provider addProvider(@RequestBody Provider provider) {
        return proivderManagementComponentService.saveProvider(provider);
    }

 
    @GetMapping("/providers")
    public List<Provider> findAllProviders() {
        return proivderManagementComponentService.getProviders();
    }

    @GetMapping("/providerById/{id}")
    public Provider findProviderById(@PathVariable int id) {
        return proivderManagementComponentService.getProviderById(id);
    }

}