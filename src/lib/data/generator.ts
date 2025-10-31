import { faker } from "@faker-js/faker";

export interface Distributor {
  id: string;
  accountNumber: string;
  w9: boolean;
  terms: boolean;
  company: string;
  city: string;
  st: string;
  primary: number;
  secondary: number;
  tertiary: number;
}

export interface Dealer {
  id: string;
  distributorId: string;
  accountNumber: string;
  w9: boolean;
  terms: boolean;
  company: string;
  city: string;
  st: string;
  acceptedUnits: number;
  totalRecords: number;
  acceptedRecords: number;
  rejectedRecords: number;
  lastUpload: string;
}

export interface Claim {
  id: string;
  dealerId: string;
  filename: string;
  uploadDate: string;
  queued: boolean;
  validated: boolean;
  totalRecords: number;
  accepted: number;
  rejected: number;
}

export interface GenData {
  distributors: Distributor[];
  dealers: Dealer[];
  claims: Claim[];
}

function generateData(): GenData {
  const genData: GenData = { distributors: [], dealers: [], claims: [] };

  for (let i = 0; i < 35; i++) {
    const distributor: Distributor = {
      id: crypto.randomUUID(),
      accountNumber: faker.string.alphanumeric(7),
      w9: faker.helpers.arrayElement([true, false]),
      terms: faker.helpers.arrayElement([true, false]),
      company: faker.company.name(),
      city: faker.location.city(),
      st: faker.location.state(),
      primary: faker.number.int({ min: 0, max: 10 }),
      secondary: faker.number.int({ min: 0, max: 10 }),
      tertiary: faker.number.int({ min: 0, max: 10 }),
    };

    for (let i = 0; i < 20; i++) {
      const dealer: Dealer = {
        id: crypto.randomUUID(),
        distributorId: distributor.id,
        accountNumber: faker.string.alphanumeric(7),
        w9: faker.helpers.arrayElement([true, false]),
        terms: faker.helpers.arrayElement([true, false]),
        company: faker.company.name(),
        city: faker.location.city(),
        st: faker.location.state(),
        acceptedUnits: faker.number.int({ min: 0, max: 10 }),
        totalRecords: faker.number.int({ min: 0, max: 10 }),
        acceptedRecords: faker.number.int({ min: 0, max: 10 }),
        rejectedRecords: faker.number.int({ min: 0, max: 10 }),
        lastUpload: faker.date.anytime().toDateString(),
      };

      for (let i = 0; i < 10; i++) {
        const claim: Claim = {
          id: crypto.randomUUID(),
          dealerId: dealer.id,
          filename: faker.system.commonFileName(),
          uploadDate: faker.date.anytime().toDateString(),
          queued: faker.helpers.arrayElement([true, false]),
          validated: faker.helpers.arrayElement([true, false]),
          totalRecords: faker.number.int({ min: 0, max: 10 }),
          accepted: faker.number.int({ min: 0, max: 10 }),
          rejected: faker.number.int({ min: 0, max: 10 }),
        };
        genData.claims.push(claim);
      }
      genData.dealers.push(dealer);
    }

    genData.distributors.push(distributor);
  }

  return genData;
}

export const generatedData = generateData();
