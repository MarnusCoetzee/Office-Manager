import { createSelector } from '@ngrx/store';
import { getBoardRoomState, BoardRoomsState } from '../index';

import { listAdapter } from './boardrooms.reducer';

export const getListState = createSelector(
  getBoardRoomState,
  (state: BoardRoomsState) => state.list
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = listAdapter.getSelectors(getListState);

export const selectEntityById = createSelector(
  selectEntities,
  (entities, props) => entities[props.id]
);
