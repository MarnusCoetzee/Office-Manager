import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Color, Office, officeColors } from '../../../../models/backend';
import * as fromList from '../../store/offices';
import * as fromRoot from '@app/store';
import { regex } from '@app/shared/utils/regex';
import { Store } from '@ngrx/store';
import { NotificationService } from '@app/shared';
@Component({
  selector: 'app-edit-office-dialog',
  templateUrl: './edit-office-dialog.component.html',
  styleUrls: ['./edit-office-dialog.component.scss'],
})
export class EditOfficeDialogComponent implements OnInit {
  office: Office;
  form: FormGroup;
  regex = regex;
  // office colours
  officeColours: Color[] = officeColors;
  selectedColour: string;
  constructor(
    private dialogRef: MatDialogRef<EditOfficeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private notify: NotificationService
  ) {
    this.office = data.office;
  }

  ngOnInit(): void {
    this.initForm();
    this.selectedColour = this.office.officeColor;
  }

  private initForm() {
    this.form = this.fb.group({
      name: [
        this.office.officeName,
        {
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      email: [
        this.office.officeEmail,
        {
          validators: [Validators.required, Validators.pattern(regex.email)],
        },
      ],
      tellNumber: [
        this.office.officeTellNumber,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.phone),
            Validators.minLength(9),
          ],
        },
      ],
      officeAddress: [
        this.office.officeLocation,
        {
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      maxOfficeOccupants: [
        this.office.maxOfficeOccupants,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.numbers),
            Validators.min(this.office.totalEmployees),
          ],
        },
      ],
    });
  }

  // Getters for form values
  get officeName(): any {
    return this.form.get('name');
  }

  get officeEmail(): any {
    return this.form.get('email');
  }

  get officeTellNumber(): any {
    return this.form.get('tellNumber');
  }

  get officeAddress(): any {
    return this.form.get('officeAddress');
  }

  get maxOfficeOccupants(): any {
    return this.form.get('maxOfficeOccupants');
  }

  onClickClearTextField(id: string) {
    switch (id) {
      case 'name':
        this.officeName.reset();
        break;
      case 'email':
        this.officeEmail.reset();
        break;
      case 'tellNumber':
        this.officeTellNumber.reset();
      case 'officeAddress':
        this.officeAddress.reset();
      case 'maxOfficeOccupants':
        this.maxOfficeOccupants.reset();
    }
  }

  onClickAddOfficeToDB() {
    if (this.form.valid) {
      const value = this.form.value;
      const office: Office = {
        ownerId: this.office.ownerId,
        id: this.office.id,
        officeName: value.name,
        officeEmail: value.email,
        officeTellNumber: value.tellNumber,
        officeLocation: value.officeAddress,
        maxOfficeOccupants: value.maxOfficeOccupants,
        totalEmployees: this.office.totalEmployees,
        officeColor: this.selectedColour,
      };
      this.store.dispatch(new fromList.Update(office));
      this.dialogRef.close();
      this.notify.success('Successfully Updated Office');
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
