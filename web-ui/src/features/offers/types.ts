export type Offer = {
  id: number;
  roleName: string;
  experienceLevel: string;
  technologiesCatalog: string;
  domainId: number;
  domainName: string;
  masterAgreementTypeId: number;
  masterAgreementTypeName: string;
  provider: {
    id: number;
    offerId: string;
    name: string;
    quotePrice: number;
    cycle: number;
  }[];
};
