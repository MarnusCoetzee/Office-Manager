import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, act } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { extractDocumentChangeActionData } from '../../../../../../shared/utils/data';

import { Visitor } from '../../../../../../models/backend/visitor';

import * as fromActions from './visitor.actions';
import firebase from 'firebase';
import { VisitorService } from '../../services/visitor.service';

type Action = fromActions.All;

@Injectable()
// @ts-ignore
export class VisitorEffects {
  constructor(
    private actions: Actions,
    private afs: AngularFirestore,
    private visService: VisitorService
  ) {}

  @Effect()
  // @ts-ignore
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    map((action: fromActions.Read) => action.officeId),
    switchMap((id) =>
      this.visService.readAllVisitors(id).pipe(
        take(1),
        // @ts-ignore
        map((changes) =>
          changes.map((x) => extractDocumentChangeActionData(x))
        ),
        map((visitors: Visitor[]) => new fromActions.ReadSuccess(visitors)),
        catchError((err) => of(new fromActions.ReadError(err.message)))
      )
    )
  );
}
