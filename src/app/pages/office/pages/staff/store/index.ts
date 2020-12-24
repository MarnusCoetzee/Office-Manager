import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './staff-list/staff.reducer';
import { StaffEffects } from './staff-list/staff.effects';

export interface StaffState {
  list: fromList.StaffListState;
}

export const reducers: ActionReducerMap<StaffState> = {
  list: fromList.reducer,
};

export const effects: any[] = [StaffEffects];

export const getStaffState = createFeatureSelector<StaffState>('staff');
