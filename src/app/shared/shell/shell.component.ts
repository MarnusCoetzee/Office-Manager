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
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isAuthorized$: Observable<boolean>;
  user$: Observable<fromUser.User>;
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.user$ = this.store.pipe(select(fromUser.getUser));
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
}
