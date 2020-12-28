import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, act } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { extractDocumentChangeActionData } from '../../../../../../shared/utils/data';

import { Staff } from '../../../../../../models/backend/staff';
import { StaffCreateRequest } from './staff.models';

import * as fromActions from './staff.actions';
import firebase from 'firebase';
import { StaffService } from '../../services/staff.service';
type Action = fromActions.All;

@Injectable()
// @ts-ignore
export class StaffEffects {
  constructor(
    private actions: Actions,
    private afs: AngularFirestore,
    private staffService: StaffService
  ) {}

  @Effect()
  // @ts-ignore
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    map((action: fromActions.Read) => action.officeId),
    switchMap((id) =>
      this.staffService.readAllStaff(id).pipe(
        take(1),
        // @ts-ignore
        map((changes) =>
          changes.map((x) => extractDocumentChangeActionData(x))
        ),
        map((staff: Staff[]) => new fromActions.ReadSuccess(staff)),
        catchError((err) => of(new fromActions.ReadError(err.message)))
      )
    )
  );

  @Effect()
  // @ts-ignore
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.staff),
    map((boardroom: StaffCreateRequest) => ({
      ...boardroom,
    })),
    switchMap((request: StaffCreateRequest) =>
      from(this.staffService.createNewStaff(request, request.officeId)).pipe(
        // @ts-ignore
        map((res) => ({ ...request, id: res.id })),
        map((staff: Staff) => new fromActions.CreateSuccess(staff)),
        catchError((err) => of(new fromActions.CreateError(err.message)))
      )
    )
  );

  @Effect()
  // @ts-ignore
  update: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.UPDATE),
    map((action: fromActions.Update) => action.staff),
    map((staff: Staff) => ({
      ...staff,
      updated: firebase.firestore.FieldValue.serverTimestamp(),
    })),
    switchMap((staff) =>
      from(
        this.afs
          .collection('offices')
          .doc(staff.officeId)
          .collection('staff')
          .doc(staff.id)
          .set(staff)
      ).pipe(
        map(
          () => new fromActions.UpdateSuccess(staff.id, staff.officeId, staff)
        ),
        catchError((err) => of(new fromActions.UpdateError(err.message)))
      )
    )
  );

  @Effect()
  // @ts-ignore
  delete: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.DELETE),
    map((action: fromActions.Delete) => action.staff),
    switchMap((staff) =>
      from(
        this.afs
          .collection('offices')
          .doc(staff.officeId)
          .collection('boardrooms')
          .doc(staff.id)
          .delete()
      ).pipe(
        map(() => new fromActions.DeleteSuccess(staff.id)),
        catchError((err) => of(new fromActions.DeleteError(err.message)))
      )
    )
  );
}
