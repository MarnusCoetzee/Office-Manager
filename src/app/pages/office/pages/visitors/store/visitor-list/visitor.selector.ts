import { createSelector } from '@ngrx/store';
import { getVisitorState, VisitorState } from '../index';

import { listAdapter } from './visitor.reducer';

export const getListState = createSelector(
  getVisitorState,
  (state: VisitorState) => state.list
);

export const getLoading = createSelector(
  getVisitorState,
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
