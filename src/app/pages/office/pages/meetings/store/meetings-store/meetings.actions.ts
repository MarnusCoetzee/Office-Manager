import { Action } from '@ngrx/store';
import { Meeting } from '@app/models/backend';

export enum Types {
  READ = '[Meeting] Read: Start',
  READ_SUCCESS = '[Meeting] Read: Success',
  READ_ERROR = '[Meeting] Read: Error',

  CREATE = '[Meeting] Create: Start',
  CREATE_SUCCESS = '[Meeting] Create: Success',
  CREATE_ERROR = '[Meeting] Create: Error',

  UPDATE = '[Meeting] Update: Start',
  UPDATE_SUCCESS = '[Meeting] Update: Success',
  UPDATE_ERROR = '[Meeting] Update: Error',

  DELETE = '[Meeting] Delete: Start',
  DELETE_SUCCESS = '[Meeting] Delete: Success',
  DELETE_ERROR = '[Meeting] Delete: Error',
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor(public officeId: string) {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public items: Meeting[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public meeting: Meeting) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public meeting: Meeting) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

// Update

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public meeting: Meeting) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(
    public id: string,
    public officeId: string,
    public changes: Partial<Meeting>
  ) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

// Delete

export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public meeting: Meeting) {}
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
