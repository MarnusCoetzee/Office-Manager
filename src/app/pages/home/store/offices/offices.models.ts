export interface Office {
  id: string;
  officeName: string;
  officeLocation: string;
  officeEmail: string;
  officeTellNumber?: string;
  maxOfficeOccupants: string;
  officeColor?: string;
  officeUrl?: string;
  officeQRCodeValue?: string;
}

export type OfficeCreateRequest = Office;
