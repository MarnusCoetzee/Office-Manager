import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromRoot from '../../store';
import * as fromUser from '../../store/user';
import * as fromOffices from './store/offices';
import { Office } from './store/offices/offices.models';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { CreateOfficeDialogComponent } from './dialogs/create-office-dialog/create-office-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  offices$: Observable<Office[]>;
  loading$: Observable<boolean>;
  private destroy = new Subject<any>();
  constructor(public dialog: MatDialog, private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.offices$ = this.store.select(fromOffices.selectAll);
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.store.dispatch(new fromOffices.Read());
  }

  onClickAddNewOffice() {
    this.dialog.open(CreateOfficeDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: {},
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy.next();
    this.destroy.complete();
  }
}
