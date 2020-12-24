import { Action } from '@ngrx/store';
import { Staff } from '../../../../../../models/backend';

export enum Types {
  READ = '[Staff] Read: Start',
  READ_SUCCESS = '[Staff] Read: Success',
  READ_ERROR = '[Staff] Read: Error',

  CREATE = '[Staff] Create: Start',
  CREATE_SUCCESS = '[Staff] Create: Success',
  CREATE_ERROR = '[Staff] Create: Error',

  UPDATE = '[Staff] Update: Start',
  UPDATE_SUCCESS = '[Staff] Update: Success',
  UPDATE_ERROR = '[Staff] Update: Error',

  DELETE = '[Staff] Delete: Start',
  DELETE_SUCCESS = '[Staff] Delete: Success',
  DELETE_ERROR = '[Staff] Delete: Error',
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor(public officeId: string) {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public items: Staff[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public staff: Staff) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public staff: Staff) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

// Update

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public staff: Staff) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(
    public id: string,
    public officeId: string,
    public changes: Partial<Staff>
  ) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

// Delete

export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public staff: Staff) {}
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
