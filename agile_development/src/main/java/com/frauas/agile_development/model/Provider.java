package com.frauas.agile_development.model;

import java.util.List;

public class Provider {
	
	private List<Domain> domains;
	
	private String experienceLevel;
	private String technologyLevel;
	private Float price;
	

	public Provider() {
	}


	public Provider(List<Domain> domains, String experienceLevel, String technologyLevel, Float price) {
		super();
		this.domains = domains;
		this.experienceLevel = experienceLevel;
		this.technologyLevel = technologyLevel;
		this.price = price;
	}


	public List<Domain> getDomains() {
		return domains;
	}


	public void setDomains(List<Domain> domains) {
		this.domains = domains;
	}


	public String getExperienceLevel() {
		return experienceLevel;
	}


	public void setExperienceLevel(String experienceLevel) {
		this.experienceLevel = experienceLevel;
	}


	public String getTechnologyLevel() {
		return technologyLevel;
	}


	public void setTechnologyLevel(String technologyLevel) {
		this.technologyLevel = technologyLevel;
	}


	public Float getPrice() {
		return price;
	}


	public void setPrice(Float price) {
		this.price = price;
	}


	@Override
	public String toString() {
		return "Provider [domains=" + domains + ", experienceLevel=" + experienceLevel + ", technologyLevel="
				+ technologyLevel + ", price=" + price + "]";
	}
	
	

}
