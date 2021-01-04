import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { regex } from '@app/shared/utils';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/staff-list';
import { Store } from '@ngrx/store';
import { Staff } from '@app/models/backend';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotificationService } from '@app/shared';
@Component({
  selector: 'app-create-staff-dialog',
  templateUrl: './create-staff-dialog.component.html',
  styleUrls: ['./create-staff-dialog.component.scss'],
})
export class CreateStaffDialogComponent implements OnInit {
  form: FormGroup;
  regex = regex;
  officeId: string;
  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<CreateStaffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<fromRoot.State>,
    private afs: AngularFirestore,
    private notify: NotificationService
  ) {
    this.officeId = data.officeId;
  }

  ngOnInit(): void {
    this.initForm();
    console.log(this.officeId);
  }

  onClickCloseDialog() {
    this.dialogref.close();
  }

  private initForm() {
    this.form = this.fb.group({
      firstName: ['', { validators: [Validators.required] }],
      lastName: ['', { validators: [Validators.required] }],
      staffEmail: [
        '',
        { validators: [Validators.required, Validators.pattern(regex.email)] },
      ],
    });
  }

  onClickSaveStaffMember() {
    if (this.form.valid) {
      const id = this.afs.createId();
      const officeId = this.officeId;
      const name = this.form.value.firstName;
      const surname = this.form.value.lastName;
      const email = this.form.value.staffEmail;
      const staff: Staff = {
        id,
        officeId,
        name,
        surname,
        email,
      };
      this.store.dispatch(new fromList.Create(staff));
    }
    this.dialogref.close();
    this.notify.success('Successfully added new staff member');
  }
}
