import { createSelector } from '@ngrx/store';
import { getOfficesState, OfficesState } from '../index';

import { listAdapter } from './offices.reducer';

export const getListState = createSelector(
  getOfficesState,
  (state: OfficesState) => state.offices
);

export const getLoading = createSelector(
  getOfficesState,
  (state) => state.offices.loading
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
