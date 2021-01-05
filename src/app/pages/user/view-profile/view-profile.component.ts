import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { select, Store } from '@ngrx/store';
import { User } from '@app/store/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../dialogs/edit-profile/edit-profile.component';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  loading$: Observable<boolean>;
  user$: Observable<User>;
  constructor(
    private store: Store<fromUser.UserState>,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.user$ = this.store.pipe(select(fromUser.getUser));
  }

  onClickOpenEditProfileDialog(user: User) {
    this.dialog.open(EditProfileComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { user },
    });
  }
  onClickOpenDeleteProfileDialog(user: User) {
    this.dialog.open(EditProfileComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { user },
    });
  }

  async onPhotoChanged(url: string) {
    if (url) {
      const uid = await (await this.afAuth.currentUser).uid;
      return this.db.collection('users').doc(uid).update({ photoUrl: url });
    }
  }
}
