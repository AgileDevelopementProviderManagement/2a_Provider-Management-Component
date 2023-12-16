package com.frauas.agile_development.model;

import java.util.List;

public class MasterAgreementType {

		private String masterAgreementTypeId;

		private String masterAgreementTypeName;
		
		private String validFrom;
		private String validUntil;

		private String dailyrateIndicator;
		private String deadline;
		private String teamdeadline;
		private String workscontractdeadline;
		
		private List<Domain> domains;
		

		public MasterAgreementType()
		{
		}
		
		
		public MasterAgreementType(String masterAgreementTypeId, String masterAgreementTypeName, String validFrom,
				String validUntil, String dailyrateIndicator, String deadline, String teamdeadline,
				String workscontractdeadline, List<Domain> domains) {
			super();
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


		public String getMasterAgreementTypeId() {
			return masterAgreementTypeId;
		}

		public void setMasterAgreementTypeId(String masterAgreementTypeId) {
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
					+ teamdeadline + ", workscontractdeadline=" + workscontractdeadline + ", domains=" + domains + "]";
		}

		
}
