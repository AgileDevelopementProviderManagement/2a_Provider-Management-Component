import { Domain } from "../../types";

export type ProviderType = {
  providerId?: number;
  providerName: string;
  existsSince: string;
  address: string;
  validFrom: string;
  validUntil: string;
  masterAgreementTypeId: number[],
  experienceLevel: string;
  technologyLevel: string;
  price: number;
  domains: Domain[];
};