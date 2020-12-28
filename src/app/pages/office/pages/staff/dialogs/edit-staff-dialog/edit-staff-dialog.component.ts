import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Staff } from '@app/models/backend';
import { regex } from '@app/shared/utils/regex';
import * as fromList from '../../store/staff-list';
import * as fromRoot from '@app/store';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-edit-staff-dialog',
  templateUrl: './edit-staff-dialog.component.html',
  styleUrls: ['./edit-staff-dialog.component.scss'],
})
export class EditStaffDialogComponent implements OnInit {
  staff: Staff;
  form: FormGroup;
  regex = regex;
  constructor(
    private dialogRef: MatDialogRef<EditStaffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) {
    this.staff = data.staff;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: [
        this.staff.name,
        {
          validators: [Validators.required],
        },
      ],
      surname: [
        this.staff.surname,
        {
          validators: [Validators.required],
        },
      ],
      email: [
        this.staff.email,
        {
          validators: [Validators.required, Validators.pattern(regex.email)],
        },
      ],
    });
  }

  get name(): any {
    return this.form.get('name');
  }

  get surname(): any {
    return this.form.get('surname');
  }

  get email(): any {
    return this.form.get('email');
  }

  onClickClearTextField(id: string) {
    switch (id) {
      case 'name':
        this.name.reset();
        break;
      case 'surname':
        this.surname.reset();
        break;
      case 'email':
        this.email.reset();
        break;
    }
  }

  onClickSaveUpdatedStaffMember() {
    if (this.form.valid) {
      const value = this.form.value;
      const id = this.staff.id;
      const officeId = this.staff.officeId;
      const staff: Staff = {
        email: value.email,
        name: value.name,
        surname: value.surname,
        id,
        officeId,
      };
      this.store.dispatch(new fromList.Update(staff));
      this.dialogRef.close();
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
