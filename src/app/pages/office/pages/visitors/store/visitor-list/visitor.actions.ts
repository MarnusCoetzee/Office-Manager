import { Action } from '@ngrx/store';
import { Visitor } from '../../../../../../models/backend/visitor';

export enum Types {
  READ = '[Visitor] Read: Start',
  READ_SUCCESS = '[Visitor] Read: Success',
  READ_ERROR = '[Visitor] Read: Error',
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor(public officeId: string) {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public visitors: Visitor[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

export type All = Read | ReadSuccess | ReadError;
