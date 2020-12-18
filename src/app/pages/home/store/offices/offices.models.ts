export interface Office {
  id: string;
  ownerId: string;
  officeName: string;
  officeLocation: string;
  officeEmail: string;
  officeTellNumber?: string;
  maxOfficeOccupants: string;
  officeColor?: string;
  officeUrl?: string;
  officeQRCodeValue?: string;
  totalEmployees: number;
}

export type OfficeCreateRequest = Office;
