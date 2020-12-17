import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthBottomSheetComponent } from './auth-bottom-sheet/auth-bottom-sheet.component';
import * as fromRoot from '../store';
import * as fromUser from '../store/user';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  isAuthorized$: Observable<boolean>;
  user$: Observable<fromUser.User>;
  loading$: Observable<boolean>;
  private destroy = new Subject<any>();
  constructor(
    private _bottomSheet: MatBottomSheet,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.user$ = this.store.pipe(select(fromUser.getUser));
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.store.dispatch(new fromUser.Init());

    this.store
      .pipe(select(fromUser.getUserState))
      .pipe(
        filter((state) => !!state.uid),
        take(1)
      )
      .subscribe((user) => {});
  }

  onClickOpenAuthBottomSheet() {
    this._bottomSheet.open(AuthBottomSheetComponent);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
