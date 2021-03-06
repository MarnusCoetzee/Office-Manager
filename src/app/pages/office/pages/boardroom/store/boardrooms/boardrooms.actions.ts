import { Action } from '@ngrx/store';
import { BoardRoom } from '@app/models/backend/boardroom';

export enum Types {
  READ = '[BoardRoom] Read: Start',
  READ_SUCCESS = '[BoardRoom] Read: Success',
  READ_ERROR = '[BoardRoom] Read: Error',

  CREATE = '[BoardRoom] Create: Start',
  CREATE_SUCCESS = '[BoardRoom] Create: Success',
  CREATE_ERROR = '[BoardRoom] Create: Error',

  UPDATE = '[BoardRoom] Update: Start',
  UPDATE_SUCCESS = '[BoardRoom] Update: Success',
  UPDATE_ERROR = '[BoardRoom] Update: Error',

  DELETE = '[BoardRoom] Delete: Start',
  DELETE_SUCCESS = '[BoardRoom] Delete: Success',
  DELETE_ERROR = '[BoardRoom] Delete: Error',
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor(public officeId: string) {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public items: BoardRoom[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public boardroom: BoardRoom) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public boardroom: BoardRoom) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

// Update

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public boardroom: BoardRoom) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(
    public id: string,
    public officeId: string,
    public changes: Partial<BoardRoom>
  ) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

// Delete

export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public boardroom: BoardRoom) {}
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
