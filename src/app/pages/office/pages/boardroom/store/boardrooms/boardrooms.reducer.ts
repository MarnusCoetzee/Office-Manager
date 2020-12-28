import * as fromActions from './boardrooms.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { BoardRoom } from '@app/models/backend/boardroom';

export const listAdapter = createEntityAdapter<BoardRoom>();

export interface ListState extends EntityState<BoardRoom> {
  loading: boolean;
  error: string;
}

export const initialState: ListState = listAdapter.getInitialState({
  loading: null,
  error: null,
});

export function reducer(
  state: ListState = initialState,
  action: fromActions.All
) {
  switch (action.type) {
    // Read Boardrooms
    case fromActions.Types.READ: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.READ_SUCCESS: {
      return listAdapter.addAll(action.items, { ...state, loading: false });
    }

    case fromActions.Types.READ_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    // Create BoardRoom
    case fromActions.Types.CREATE: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.CREATE_SUCCESS: {
      return listAdapter.addOne(action.boardroom, { ...state, loading: false });
    }

    case fromActions.Types.CREATE_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    // Update Boardroom
    case fromActions.Types.UPDATE: {
      return { ...state, loading: true };
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

    // Delete

    case fromActions.Types.DELETE: {
      return { ...state, loading: true, error: null };
    }

    case fromActions.Types.DELETE_SUCCESS: {
      return listAdapter.removeOne(action.id, state);
    }

    case fromActions.Types.DELETE_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    default: {
      return state;
    }
  }
}
