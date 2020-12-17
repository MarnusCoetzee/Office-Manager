import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromOffices from './offices/offices.reducer';
import { OfficesEffects } from './offices/offices.effects';

export interface JobsState {
  offices: fromOffices.OfficesState;
}

export const reducers: ActionReducerMap<JobsState> = {
  offices: fromOffices.reducer,
};

export const effects: any[] = [OfficesEffects];

export const getJobsState = createFeatureSelector<JobsState>('offices');
