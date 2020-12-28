import { createSelector } from '@ngrx/store';
import { getStaffState, StaffState } from '../index';

import { listAdapter } from './staff.reducer';

export const getListState = createSelector(
  getStaffState,
  (state: StaffState) => state.list
);

export const getLoading = createSelector(
  getStaffState,
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
