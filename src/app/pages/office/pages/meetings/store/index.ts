import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromList from './meetings-store/meetings.reducer';
import { MeetingEffects } from './meetings-store/meetings.effects';

export interface MeetingsState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<MeetingsState> = {
  list: fromList.reducer,
};

export const effects: any[] = [MeetingEffects];

export const getMeetingState = createFeatureSelector<MeetingsState>('meetings');
