import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { regex } from '@app/shared/utils/regex';
import { NotificationService } from '@app/shared';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { User } from '@app/store/user';
import * as firebase from 'firebase';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  user: User;
  form: FormGroup;
  regex = regex;
  constructor(
    private dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private notify: NotificationService
  ) {
    this.user = data.user;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      firstName: [this.user.firstName, { validators: [Validators.required] }],
      lastName: [
        this.user.lastName,
        {
          validators: [Validators.required],
        },
      ],
      cellNumber: [
        this.user.cellNumber,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.numbers),
            Validators.pattern(regex.phone),
          ],
        },
      ],
      email: [
        this.user.email,
        {
          validators: [Validators.required, Validators.pattern(regex.email)],
        },
      ],
    });
  }

  get firstName(): any {
    return this.form.get('firstName');
  }

  get lastName(): any {
    return this.form.get('lastName');
  }

  get cellNumber(): any {
    return this.form.get('cellNumber');
  }

  get email(): any {
    return this.form.get('email');
  }

  onClickClearTextField(id: string) {
    switch (id) {
      case 'firstName':
        this.firstName.reset();
        break;
      case 'lastName':
        this.lastName.reset();
        break;
      case 'cellNumber':
        this.cellNumber.reset();
        break;
      case 'email':
        this.email.reset();
        break;
    }
  }

  onClickUpdateUserProfile() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const uid = this.user.uid;
      const email = formValue.email;
      const firstName = formValue.firstName;
      const lastName = formValue.lastName;
      const cellNumber = formValue.cellNumber;
      const created = this.user.created;
      const updated = firebase.default.firestore.FieldValue.serverTimestamp();
      const roleId = this.user.roleId;
      const photoUrl = this.user.photoUrl;
      const user: User = {
        uid,
        email,
        firstName,
        lastName,
        cellNumber,
        created,
        updated,
        roleId,
        photoUrl,
      };
      this.store.dispatch(new fromUser.Edit(user));
      this.dialogRef.close();
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
