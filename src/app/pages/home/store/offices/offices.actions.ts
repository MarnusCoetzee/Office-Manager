import { Action } from '@ngrx/store';
import { Office, OfficeCreateRequest } from './offices.models';

export enum Types {
  READ = '[Office] Read: Start',
  READ_SUCCESS = '[Office] Read: Success',
  READ_ERROR = '[Office] Read: Error',

  CREATE = '[Office] Create: Start',
  CREATE_SUCCESS = '[Office] Create: Success',
  CREATE_ERROR = '[Office] Create: Error',

  UPDATE = '[Office] Update: Start',
  UPDATE_SUCCESS = '[Office] Update: Success',
  UPDATE_ERROR = '[Office] Update: Error',

  DELETE = '[Office] Delete: Start',
  DELETE_SUCCESS = '[Office] Delete: Success',
  DELETE_ERROR = '[Office] Delete: Error',
}

// Read

export class Read implements Action {
  readonly type = Types.READ;
  constructor(public uid: string) {}
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
  constructor(public job: OfficeCreateRequest) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public job: Office) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

// Update

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public job: Office) {}
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