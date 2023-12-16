package com.frauas.agile_development.model;

public class Role {
	
	private String roleName;
	private String experienceLevel;
	private String technologiesCatalog;

	public Role() {
	}

	public Role(String roleName, String experienceLevel, String technologiesCatalog) {
		super();
		this.roleName = roleName;
		this.experienceLevel = experienceLevel;
		this.technologiesCatalog = technologiesCatalog;
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

	@Override
	public String toString() {
		return "Role [roleName=" + roleName + ", experienceLevel=" + experienceLevel + ", technologiesLevel="
				+ technologiesCatalog + "]";
	}

	
}
