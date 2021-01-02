export interface Visitor {
  id: string;
  officeId: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  cellNumber?: string;
  hasCovid?: boolean;
  visitorTemperature?: number;
  visitorCheckedInTime?: number;
  visitorCheckedIn?: boolean;
  visitorCheckedOutTime?: number;
}
