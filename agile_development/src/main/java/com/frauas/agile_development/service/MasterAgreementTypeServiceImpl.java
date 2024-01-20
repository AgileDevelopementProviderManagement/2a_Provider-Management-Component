package com.frauas.agile_development.service;

import com.frauas.agile_development.model.MasterAgreementType;
import com.frauas.agile_development.repository.MasterAgreementTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MasterAgreementTypeServiceImpl implements MasterAgreementTypeService {
  @Autowired
  private  MasterAgreementTypeRepository masterAgreementTypeRepository ;


    @Override
    public List<MasterAgreementType> getMasterAgreements() {
        return masterAgreementTypeRepository.findAll();
    }
    @Override
    public MasterAgreementType getMasterAgreement(int masterAgreementTypeId) {
        return masterAgreementTypeRepository.findById(masterAgreementTypeId).orElseThrow(() ->
                new MasterAgreeTypeNotFoundException("the requested master agreement type not found in db") );
    }

    @Override
    public MasterAgreementType addMasterAgreement(MasterAgreementType masterAgreementType) {
        return masterAgreementTypeRepository.save(masterAgreementType);
    }

    @Override
    public MasterAgreementType updateMasterAgreement(int id, MasterAgreementType updatedMasterAgreement) throws MasterAgreeTypeNotFoundException{
        Optional<MasterAgreementType> isInDb = masterAgreementTypeRepository.findById(id);

        if (isInDb.isPresent()) {
            MasterAgreementType newMAT = isInDb.get();

            newMAT.setMasterAgreementTypeName(updatedMasterAgreement.getMasterAgreementTypeName());
            newMAT.setValidFrom(updatedMasterAgreement.getValidFrom());
            newMAT.setValidUntil(updatedMasterAgreement.getValidUntil());
            return masterAgreementTypeRepository.save(newMAT);
        }
        else {
            //return new MasterAgreeTypeNotFoundException();
            return null;
        }
    }


    public MasterAgreementType updateMasterAgreementWithOfferedFlags(int id) throws MasterAgreeTypeNotFoundException{
        Optional<MasterAgreementType> isInDb = masterAgreementTypeRepository.findById(id);

        if (isInDb.isPresent()) {
            MasterAgreementType newMAT = isInDb.get();

            newMAT.setIsAccepted("Accepted");

            return masterAgreementTypeRepository.save(newMAT);
        }
        else {
              return null;
        }
    }

    @Override
    public void deleteMasterAgreement(int id) {
       masterAgreementTypeRepository.deleteById(id);
    }
}
