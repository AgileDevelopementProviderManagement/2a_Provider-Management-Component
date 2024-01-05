import { Domain } from "../../types";

export type MasterAgreementType = {
  masterAgreementTypeId: string;
  masterAgreementTypeName: string;
  validFrom: string;
  validUntil: string;
  dailyrateIndicator: string;
  deadline: string;
  teamdeadline: string;
  workscontractdeadline: string;
  domains: Domain[];
};
