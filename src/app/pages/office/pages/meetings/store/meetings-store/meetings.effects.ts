import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, act } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { extractDocumentChangeActionData } from '@app/shared/utils/data';
import { Meeting } from '@app/models/backend';
import { MeetingCreateRequest } from './meetings.models';
import * as fromActions from './meetings.actions';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
type Action = fromActions.All;

@Injectable()
export class MeetingEffects {
  constructor(private actions: Actions, private afs: AngularFirestore) {}

  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    map((action: fromActions.Read) => action.officeId),
    switchMap((id) =>
      this.afs
        .collection('meetings', (ref) =>
          ref.where('officeId', '==', id).orderBy('startDate', 'asc')
        )
        .snapshotChanges()
        .pipe(
          take(1),
          map((changes) =>
            changes.map((x) => extractDocumentChangeActionData(x))
          ),
          map((meetings: Meeting[]) => new fromActions.ReadSuccess(meetings)),
          catchError((err) => of(new fromActions.ReadError(err.message)))
        )
    )
  );

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.meeting),
    map((boardroom: MeetingCreateRequest) => ({
      ...boardroom,
    })),
    switchMap((request: MeetingCreateRequest) =>
      from(this.afs.collection('meetings').doc(request.id).set(request)).pipe(
        map((res) => ({ ...request, id: request.id })),
        map((meeting: Meeting) => new fromActions.CreateSuccess(meeting)),
        catchError((err) => of(new fromActions.CreateError(err.message)))
      )
    )
  );

  @Effect()
  delete: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.DELETE),
    map((action: fromActions.Delete) => action.meeting),
    switchMap((meeting) =>
      from(this.afs.collection('meetings').doc(meeting.id).delete()).pipe(
        map(() => new fromActions.DeleteSuccess(meeting.id)),
        catchError((err) => of(new fromActions.DeleteError(err.message)))
      )
    )
  );
}
