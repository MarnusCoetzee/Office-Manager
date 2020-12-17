import { createSelector } from '@ngrx/store';
import { getJobsState, JobsState } from '../index';

import { listAdapter } from './offices.reducer';

export const getListState = createSelector(
  getJobsState,
  (state: JobsState) => state.offices
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = listAdapter.getSelectors(getListState);

export const selectEntityById = createSelector(
  selectEntities,
  (entities, props: { id: string }) => {
    return entities[props.id];
  }
);
