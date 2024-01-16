package com.frauas.agile_development.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
public class OfferRole implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String roleName;
	private String experienceLevel;
	private String technologiesCatalog;
	private Float offerroleprice;

	public OfferRole(Integer id, String roleName, String experienceLevel, String technologiesCatalog, Float offerroleprice) {
		this.id = id;
		this.roleName = roleName;
		this.experienceLevel = experienceLevel;
		this.technologiesCatalog = technologiesCatalog;
		this.offerroleprice = offerroleprice;
	}

	public OfferRole() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getExperienceLevel() {
		return experienceLevel;
	}

	public void setExperienceLevel(String experienceLevel) {
		this.experienceLevel = experienceLevel;
	}

	public String getTechnologiesCatalog() {
		return technologiesCatalog;
	}

	public void setTechnologiesCatalog(String technologiesCatalog) {
		this.technologiesCatalog = technologiesCatalog;
	}

	public Float getOfferroleprice() {
		return offerroleprice;
	}

	public void setOfferroleprice(Float offerroleprice) {
		this.offerroleprice = offerroleprice;
	}
}
