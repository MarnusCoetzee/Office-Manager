import { Staff } from '../staff';

export interface BoardRoom {
  id: string;
  officeId: string;
  name: string;
  available: boolean;
  bookings: Booking[];
}

interface Period {
  from: number;
  to: number;
}

export interface Booking {
  agenda: string;
  bookedTime: Period;
  staff: Staff[];
}
