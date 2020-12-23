import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { extractDocumentChangeActionData } from '@app/shared/utils/data';

import { BoardRoom } from '@app/models/backend';

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
}
