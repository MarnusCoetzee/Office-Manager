import { Meeting as DBMeeting } from '@app/models/backend';

export interface Meeting extends DBMeeting {
  officeId: string;
}

export type MeetingCreateRequest = DBMeeting;
