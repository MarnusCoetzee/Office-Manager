import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './visitor-list/visitor.reducer';
import { VisitorEffects } from './visitor-list/visitor.effects';

export interface VisitorState {
  list: fromList.VisitorListState;
}

export const reducers: ActionReducerMap<VisitorState> = {
  list: fromList.reducer,
};

export const effects: any[] = [VisitorEffects];

export const getVisitorState = createFeatureSelector<VisitorState>('visitors');
