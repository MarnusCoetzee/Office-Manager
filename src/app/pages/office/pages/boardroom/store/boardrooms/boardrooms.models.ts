import { BoardRoom as DBBoardRoom } from '@app/models/backend';

export interface BoardRoom extends DBBoardRoom {
  id: string;
}

export type BoardRoomCreateRequest = DBBoardRoom;
