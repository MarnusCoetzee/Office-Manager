import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, act } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { extractDocumentChangeActionData } from '@app/shared/utils/data';

import { BoardRoom } from '@app/models/backend';
import { BoardRoomCreateRequest } from './boardrooms.models';

import * as fromActions from './boardrooms.actions';
import firebase from 'firebase';

type Action = fromActions.All;

@Injectable()
export class BoardRoomEffects {
  constructor(private actions: Actions, private afs: AngularFirestore) {}

  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    map((action: fromActions.Read) => action.officeId),
    switchMap((id) =>
      this.afs
        .collection('offices')
        .doc(id)
        .collection('boardrooms')
        .snapshotChanges()
        .pipe(
          take(1),
          map((changes) =>
            changes.map((x) => extractDocumentChangeActionData(x))
          ),
          map(
            (boardrooms: BoardRoom[]) => new fromActions.ReadSuccess(boardrooms)
          ),
          catchError((err) => of(new fromActions.ReadError(err.message)))
        )
    )
  );

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.boardroom),
    map((boardroom: BoardRoomCreateRequest) => ({
      ...boardroom,
    })),
    switchMap((request: BoardRoomCreateRequest) =>
      from(
        this.afs
          .collection('offices')
          .doc(request.officeId)
          .collection('boardrooms')
          .add(request)
      ).pipe(
        map((res) => ({ ...request, id: res.id })),
        map((boardroom: BoardRoom) => new fromActions.CreateSuccess(boardroom)),
        catchError((err) => of(new fromActions.CreateError(err.message)))
      )
    )
  );

  @Effect()
  update: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.UPDATE),
    map((action: fromActions.Update) => action.boardroom),
    map((job: BoardRoom) => ({
      ...job,
      updated: firebase.firestore.FieldValue.serverTimestamp(),
    })),
    switchMap((boardroom) =>
      from(
        this.afs
          .collection('offices')
          .doc(boardroom.officeId)
          .collection('boardrooms')
          .doc(boardroom.id)
          .set(boardroom)
      ).pipe(
        map(
          () =>
            new fromActions.UpdateSuccess(
              boardroom.id,
              boardroom.officeId,
              boardroom
            )
        ),
        catchError((err) => of(new fromActions.UpdateError(err.message)))
      )
    )
  );

  @Effect()
  delete: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.DELETE),
    map((action: fromActions.Delete) => action.boardroom),
    switchMap((boardroom) =>
      from(
        this.afs
          .collection('jobs')
          .doc(boardroom.officeId)
          .collection('boardrooms')
          .doc(boardroom.id)
          .delete()
      ).pipe(
        map(() => new fromActions.DeleteSuccess(boardroom.id)),
        catchError((err) => of(new fromActions.DeleteError(err.message)))
      )
    )
  );
}
