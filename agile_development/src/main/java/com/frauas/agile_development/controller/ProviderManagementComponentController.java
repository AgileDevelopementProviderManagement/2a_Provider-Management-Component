package com.frauas.agile_development.controller;
import java.util.List;

import com.frauas.agile_development.model.MasterAgreementType;
import com.frauas.agile_development.model.Provider;
import com.frauas.agile_development.service.MasterAgreementTypeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.frauas.agile_development.service.ProviderManagementComponentService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProviderManagementComponentController {

    @Autowired
    private ProviderManagementComponentService providerManagementComponentService;

    @Autowired
    private MasterAgreementTypeServiceImpl masterAgreementTypeServiceImpl;

    @PostMapping("/addProvider")
    public Provider addProvider(@RequestBody Provider provider) {
        return providerManagementComponentService.saveProvider(provider);
    }

 
    @GetMapping("/providers")
    public List<Provider> findAllProviders() {
        return providerManagementComponentService.getProviders();
    }

    @GetMapping("/providerById/{id}")
    public Provider findProviderById(@PathVariable int id) {
        return providerManagementComponentService.getProviderById(id);
    }
    @GetMapping(value = "/mastertype/all")
    public ResponseEntity<List<MasterAgreementType>> getMasterAgreements() {
        List<MasterAgreementType> masterAgreements = masterAgreementTypeServiceImpl.getMasterAgreements();
        return new ResponseEntity<>(masterAgreements, HttpStatus.OK);
    }

    @GetMapping(value = "/getmastertype/{id}")
    public ResponseEntity<MasterAgreementType> addMasterAgreements(@PathVariable("id") int masterId) {
        MasterAgreementType masterAgreements = masterAgreementTypeServiceImpl.getMasterAgreement(masterId);
        return new ResponseEntity<>(masterAgreements, HttpStatus.OK);
    }

    @PostMapping(value = "/addmastertype")
    public ResponseEntity<MasterAgreementType> addMasterAgreements(@RequestBody MasterAgreementType masterAgreementType) {
        MasterAgreementType newMasterAgreement = masterAgreementTypeServiceImpl.addMasterAgreement(masterAgreementType);
        return new ResponseEntity<>(newMasterAgreement, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MasterAgreementType> updateMasterAgreement(
            @PathVariable int id,
            @RequestBody MasterAgreementType updatedMasterAgreement) {

        MasterAgreementType updated = masterAgreementTypeServiceImpl.updateMasterAgreement(id, updatedMasterAgreement);

        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(value = "/mastertype/{deleteid}")
    public void removeMasterAgreement(@PathVariable("deleteid") int deleteid) {
        masterAgreementTypeServiceImpl.deleteMasterAgreement(deleteid);

    }

}