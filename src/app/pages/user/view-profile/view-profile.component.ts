import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { select, Store } from '@ngrx/store';
import { User } from '@app/store/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../dialogs/edit-profile/edit-profile.component';
import * as firebase from 'firebase';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  loading$: Observable<boolean>;
  user$: Observable<User>;
  userSub: Subscription;
  user: User;
  constructor(
    private store: Store<fromRoot.State>,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.user$ = this.store.pipe(select(fromUser.getUser));
    this.userSub = this.user$.subscribe((result) => {
      this.user = result;
    });
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
      const user: User = {
        uid: this.user.uid,
        cellNumber: this.user.cellNumber,
        created: this.user.created,
        email: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        photoUrl: url,
        roleId: this.user.roleId,
        updated: firebase.default.firestore.FieldValue.serverTimestamp(),
      };
      this.store.dispatch(new fromUser.Edit(user));
    }
  }
}
