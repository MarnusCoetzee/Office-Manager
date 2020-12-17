import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromOffices from './offices/offices.reducer';
import { OfficesEffects } from './offices/offices.effects';

export interface OfficesState {
  offices: fromOffices.OfficesState;
}

export const reducers: ActionReducerMap<OfficesState> = {
  offices: fromOffices.reducer,
};

export const effects: any[] = [OfficesEffects];

export const getOfficesState = createFeatureSelector<OfficesState>('offices');
