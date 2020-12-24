import { Staff as DBStaff } from '../../../../../../models/backend';

export interface Staff extends DBStaff {
  staffId: string;
}

export type StaffCreateRequest = DBStaff;
