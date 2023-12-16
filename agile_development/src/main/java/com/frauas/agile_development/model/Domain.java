package com.frauas.agile_development.model;

import java.util.List;

public class Domain {
	
	private String domainId;
	private String domainName;
	List<Role> roles;
	

	public Domain() {
	}


	public Domain(String domainId, String domainName, List<Role> roles) {
		super();
		this.domainId = domainId;
		this.domainName = domainName;
		this.roles = roles;
	}


	public String getDomainId() {
		return domainId;
	}


	public void setDomainId(String domainId) {
		this.domainId = domainId;
	}


	public String getDomainName() {
		return domainName;
	}


	public void setDomainName(String domainName) {
		this.domainName = domainName;
	}


	public List<Role> getRoles() {
		return roles;
	}


	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}


	@Override
	public String toString() {
		return "Domain [domainId=" + domainId + ", domainName=" + domainName + ", roles=" + roles + "]";
	}

	
}
