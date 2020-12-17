import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { extractDocumentChangeActionData } from '../../../../shared/utils/data';

import { Office, OfficeCreateRequest } from './offices.models';

import * as fromActions from './offices.actions';
import { AngularFireAuth } from '@angular/fire/auth';

type Action = fromActions.All;

@Injectable()
export class ListEffects {
  constructor(
    private actions: Actions,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  /**
   * READ OFFICES
   */
  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap(() => this.afAuth.authState.pipe(take(1))),
    switchMap((authstate) => {
      if (authstate) {
        return this.afs
          .collection('offices', (ref) =>
            ref
              .where('ownerId', '==', authstate.uid)
              .orderBy('createdAt', 'desc')
          )
          .valueChanges()
          .pipe(
            map((offices: Office[]) => new fromActions.ReadSuccess(offices)),
            catchError((err) => of(new fromActions.ReadError(err.message)))
          );
      }
    })
  );
}
