import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './boardrooms/boardrooms.reducer';
import { BoardRoomEffects } from './boardrooms/boardrooms.effects';

export interface BoardRoomsState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<BoardRoomsState> = {
  list: fromList.reducer,
};

export const effects: any[] = [BoardRoomEffects];

export const getBoardRoomState = createFeatureSelector<BoardRoomsState>(
  'boardrooms'
);
