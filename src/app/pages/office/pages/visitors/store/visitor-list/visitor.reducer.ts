import * as fromActions from './visitor.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Visitor } from '@app/models/backend/visitor';

export const listAdapter = createEntityAdapter<Visitor>();

export interface VisitorListState extends EntityState<Visitor> {
  loading: boolean;
  error: string;
}

export const initialState: VisitorListState = listAdapter.getInitialState({
  loading: null,
  error: null,
});

export function reducer(
  state: VisitorListState = initialState,
  action: fromActions.All
) {
  switch (action.type) {
    case fromActions.Types.READ: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.READ_SUCCESS: {
      return listAdapter.addMany(action.visitors, { ...state, loading: false });
    }

    case fromActions.Types.READ_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
}
