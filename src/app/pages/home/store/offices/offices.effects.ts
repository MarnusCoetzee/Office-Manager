import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { extractDocumentChangeActionData } from '../../../../shared/utils/data';

import { Office, OfficeCreateRequest } from './offices.models';

import * as fromActions from './offices.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

type Action = fromActions.All;

@Injectable()
export class OfficesEffects {
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
        const id = authstate.uid;
        return this.afs
          .collection('offices', (ref) => ref.where('ownerId', '==', id))
          .snapshotChanges()
          .pipe(
            take(1),
            map((changes) =>
              changes.map((x) => extractDocumentChangeActionData(x))
            ),
            map((offices: Office[]) => new fromActions.ReadSuccess(offices)),
            catchError((err) => of(new fromActions.ReadError(err.message)))
          );
      }
    })
  );

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.job),
    map((job: OfficeCreateRequest) => ({
      ...job,
      created: firebase.default.firestore.FieldValue.serverTimestamp(),
    })),
    switchMap((request: OfficeCreateRequest) =>
      from(this.afs.collection('offices').add(request)).pipe(
        map((res) => ({ ...request, id: res.id })),
        map((job: Office) => new fromActions.CreateSuccess(job)),
        catchError((err) => of(new fromActions.CreateError(err.message)))
      )
    )
  );

  @Effect()
  update: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.UPDATE),
    map((action: fromActions.Update) => action.job),
    map((job: Office) => ({
      ...job,
      updated: firebase.default.firestore.FieldValue.serverTimestamp(),
    })),
    switchMap((job) =>
      from(this.afs.collection('offices').doc(job.id).set(job)).pipe(
        map(() => new fromActions.UpdateSuccess(job.id, job)),
        catchError((err) => of(new fromActions.UpdateError(err.message)))
      )
    )
  );

  @Effect()
  delete: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.DELETE),
    map((action: fromActions.Delete) => action.id),
    switchMap((id) =>
      from(this.afs.collection('offices').doc(id).delete()).pipe(
        map(() => new fromActions.DeleteSuccess(id)),
        catchError((err) => of(new fromActions.DeleteError(err.message)))
      )
    )
  );
}
