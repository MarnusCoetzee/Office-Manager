import { Action } from '@ngrx/store';
import { Office, OfficeCreateRequest } from './offices.models';

export enum Types {
  /**
   * OFFICES
   */
  READ = '[Office] Read: Start',
  READ_SUCCESS = '[Office] Read: Success',
  READ_ERROR = '[Office] Read: Error',

  CREATE = '[Office] Create: Start',
  CREATE_SUCCESS = '[Office] Create: Success',
  CREATE_ERROR = '[Office] Create: Error',

  READ_SINGLE_OFFICE = '[Office] Read Single: Start',
  READ_SINGLE_OFFICE_SUCCESS = '[Office] Read Single: Success',
  READ_SINGLE_OFFICE_ERROR = '[Office] Read Single: Error',

  UPDATE = '[Office] Update: Start',
  UPDATE_SUCCESS = '[Office] Update: Success',
  UPDATE_ERROR = '[Office] Update: Error',

  DELETE = '[Office] Delete: Start',
  DELETE_SUCCESS = '[Office] Delete: Success',
  DELETE_ERROR = '[Office] Delete: Error',

  /**
   * BOARDROOMS
   */
  READ_BOARDROOMS = '[Boardroom] Read: Start',
  READ_BOARDROOMS_SUCCESS = '[Boardroom] Read: Success',
  READ_BOARDROOMS_ERROR = '[Boardroom] Read: Error',

  CREATE_BOARDROOMS = '[Boardroom] Create: Start',
  CREATE_BOARDROOMS_SUCCESS = '[Boardroom] Create: Success',
  CREATE_BOARDROOMS_ERROR = '[Boardroom] Create: Error',

  UPDATE_BOARDROOM = '[Boardroom] Update: Start',
  UPDATE_BOARDROOM_SUCCESS = '[Boardroom] Update: Success',
  UPDATE_BOARDROOM_ERROR = '[Boardroom] Update: Error',

  DELETE_BOARDROOM = '[Boardroom] Delete: Start',
  DELETE_BOARDROOM_SUCCESS = '[Boardroom] Delete: Success',
  DELETE_BOARDROOM_ERROR = '[Boardroom] Delete: Error',
}

// Read All

export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public items: Office[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

// Create

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public office: OfficeCreateRequest) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public office: Office) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

// Update

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public office: Office) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(public id: string, public changes: Partial<Office>) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

// Delete

export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public id: string) {}
}

export class DeleteSuccess implements Action {
  readonly type = Types.DELETE_SUCCESS;
  constructor(public id: string) {}
}

export class DeleteError implements Action {
  readonly type = Types.DELETE_ERROR;
  constructor(public error: string) {}
}

export type All =
  // Offices
  | Read
  | ReadSuccess
  | ReadError
  | Create
  | CreateSuccess
  | CreateError
  | Update
  | UpdateSuccess
  | UpdateError
  | Delete
  | DeleteSuccess
  | DeleteError;
// Boardrooms;
