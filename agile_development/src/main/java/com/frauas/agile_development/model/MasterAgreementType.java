package com.frauas.agile_development.model;

import jakarta.persistence.*;

import lombok.Data;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Master_Table")
public class MasterAgreementType  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer masterAgreementTypeId;

	private String masterAgreementTypeName;

	private String validFrom;
	private String validUntil;

	private String dailyrateIndicator;
	private String deadline;
	private String teamdeadline;
	private String workscontractdeadline;

	//@Column(columnDefinition="JSON")
	//@OneToMany(cascade = CascadeType.ALL)
	@OneToMany(cascade = CascadeType.ALL)
	//@JoinColumn(name = "master_agreement_id", referencedColumnName = "masterAgreementTypeId")
	private List<Domain> domains;

	public MasterAgreementType() {
	}

	public MasterAgreementType(int masterAgreementTypeId, String masterAgreementTypeName, String validFrom,
			String validUntil, String dailyrateIndicator, String deadline, String teamdeadline,
			String workscontractdeadline,List<Domain> domains) {
		super(); // List<Domain> domains
		this.masterAgreementTypeId = masterAgreementTypeId;
		this.masterAgreementTypeName = masterAgreementTypeName;
		this.validFrom = validFrom;
		this.validUntil = validUntil;
		this.dailyrateIndicator = dailyrateIndicator;
		this.deadline = deadline;
		this.teamdeadline = teamdeadline;
		this.workscontractdeadline = workscontractdeadline;
		this.domains = domains;
	}

	public List<Domain> getDomains() {
		return domains;
	}

	public void setDomains(List<Domain> domains) {
		this.domains = domains;
	}

	public Integer getMasterAgreementTypeId() {
		return masterAgreementTypeId;
	}

	public void setMasterAgreementTypeId(Integer masterAgreementTypeId) {
		this.masterAgreementTypeId = masterAgreementTypeId;
	}

	public String getMasterAgreementTypeName() {
		return masterAgreementTypeName;
	}

	public void setMasterAgreementTypeName(String masterAgreementTypeName) {
		this.masterAgreementTypeName = masterAgreementTypeName;
	}

	public String getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(String validFrom) {
		this.validFrom = validFrom;
	}

	public String getValidUntil() {
		return validUntil;
	}

	public void setValidUntil(String validUntil) {
		this.validUntil = validUntil;
	}

	public String getDailyrateIndicator() {
		return dailyrateIndicator;
	}

	public void setDailyrateIndicator(String dailyrateIndicator) {
		this.dailyrateIndicator = dailyrateIndicator;
	}

	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	public String getTeamdeadline() {
		return teamdeadline;
	}

	public void setTeamdeadline(String teamdeadline) {
		this.teamdeadline = teamdeadline;
	}

	public String getWorkscontractdeadline() {
		return workscontractdeadline;
	}

	public void setWorkscontractdeadline(String workscontractdeadline) {
		this.workscontractdeadline = workscontractdeadline;
	}

	@Override
	public String toString() {
		return "MasterAgreementType [masterAgreementTypeId=" + masterAgreementTypeId + ", masterAgreementTypeName="
				+ masterAgreementTypeName + ", validFrom=" + validFrom + ", validUntil=" + validUntil
				+ ", dailyrateIndicator=" + dailyrateIndicator + ", deadline=" + deadline + ", teamdeadline="
				+ teamdeadline + ", workscontractdeadline=" + workscontractdeadline +  "]";
	}

}//", domains=" + domains +
