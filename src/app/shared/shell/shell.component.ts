import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as fromRoot from '../../store';
import * as fromUser from '../../store/user';
import { filter, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateOfficeDialogComponent } from '@app/pages/home/dialogs/create-office-dialog/create-office-dialog.component';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isAuthorized$: Observable<boolean>;
  user$: Observable<fromUser.User>;
  role$: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.user$ = this.store.pipe(select(fromUser.getUser));
    this.role$ = this.store.pipe(select(fromUser.getIsOwner));
  }

  onClickLogout() {
    this.store.dispatch(new fromUser.SignOut());
  }

  onClickNavigateEditProfile() {
    this.router.navigate(['user/view-profile']);
  }

  onClickNavigateHome() {
    this.router.navigate(['home']);
  }

  onClickOpenNewOfficeDialog() {
    this.dialog.open(CreateOfficeDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: {},
    });
  }
}
