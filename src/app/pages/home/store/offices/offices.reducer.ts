import * as fromActions from './offices.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Office } from './offices.models';

export const listAdapter = createEntityAdapter<Office>();

export interface OfficesState extends EntityState<Office> {
  loading: boolean;
  error: string;
}

export const initialState: OfficesState = listAdapter.getInitialState({
  loading: null,
  error: null,
});

export function reducer(
  state: OfficesState = initialState,
  action: fromActions.All
) {
  switch (action.type) {
    // Read

    case fromActions.Types.READ: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.READ_SUCCESS: {
      return listAdapter.addAll(action.items, { ...state, loading: false });
    }

    case fromActions.Types.READ_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    // Create

    case fromActions.Types.CREATE: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.CREATE_SUCCESS: {
      return listAdapter.addOne(action.office, { ...state, loading: false });
    }

    case fromActions.Types.CREATE_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    // Update

    case fromActions.Types.UPDATE: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.UPDATE_SUCCESS: {
      return listAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes,
        },
        { ...state, loading: false }
      );
    }

    case fromActions.Types.UPDATE_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    // Delete

    case fromActions.Types.DELETE: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.DELETE_SUCCESS: {
      return listAdapter.removeOne(action.id, { ...state, loading: false });
    }

    case fromActions.Types.DELETE_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    default: {
      return state;
    }
  }
}
