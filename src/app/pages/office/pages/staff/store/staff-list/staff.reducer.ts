import * as fromActions from './staff.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Staff } from '../../../../../../models/backend/staff';

export const listAdapter = createEntityAdapter<Staff>();

export interface StaffListState extends EntityState<Staff> {
  loading: boolean;
  error: string;
}

export const initialState: StaffListState = listAdapter.getInitialState({
  loading: null,
  error: null,
});

export function reducer(
  state: StaffListState = initialState,
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
      return listAdapter.addOne(action.staff, { ...state, loading: false });
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
        state
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
