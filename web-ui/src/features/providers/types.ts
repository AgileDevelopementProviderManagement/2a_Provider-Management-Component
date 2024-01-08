import { Domain } from "../../types";

export type ProviderType = {
  providerId: number;
  providerName: string;
  experienceLevel: string;
  technologyLevel: string;
  price: number;
  domains: Domain[];
};