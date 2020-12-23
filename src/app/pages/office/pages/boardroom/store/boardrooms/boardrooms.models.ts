import { BoardRoom as DBBoardRoom } from '@app/models/backend';

export interface BoardRoom extends DBBoardRoom {
  officeId: string;
}

export type BoardRoomCreateRequest = DBBoardRoom;
