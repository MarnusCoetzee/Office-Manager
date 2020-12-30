import { BoardRoom } from '../boardroom';
import { Staff } from '../staff';

export interface Meeting {
  id: string;
  officeId: string;
  boardroom: BoardRoom;
  agenda: string;
  staff: Staff[];
  startDate: any;
  duration: number;
}
