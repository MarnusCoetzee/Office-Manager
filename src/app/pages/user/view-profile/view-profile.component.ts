import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { select, Store } from '@ngrx/store';
import { User } from '@app/store/user';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  loading$: Observable<boolean>;
  user$: Observable<User>;
  constructor(private store: Store<fromUser.UserState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.user$ = this.store.pipe(select(fromUser.getUser));
  }

  onClickOpenUploadNewProfilePhotoDialog() {}
}
