import { createSelector } from '@ngrx/store';
import { MeetingsState, getMeetingState } from '../index';
import { listAdapter } from './meetings.reducer';

export const getListState = createSelector(
  getMeetingState,
  (state: MeetingsState) => state.list
);

export const getLoading = createSelector(
  getMeetingState,
  (state) => state.list.loading
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
