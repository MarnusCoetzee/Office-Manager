import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { regex } from '../../../../shared/utils/regex';
import { Office } from '../../store/offices';
import * as fromOffice from '../../store/index';
@Component({
  selector: 'app-create-office-dialog',
  templateUrl: './create-office-dialog.component.html',
  styleUrls: ['./create-office-dialog.component.scss'],
})
export class CreateOfficeDialogComponent implements OnInit {
  newOfficeForm: FormGroup;
  regex = regex;
  constructor(
    private fb: FormBuilder,
    private matdialogRef: MatDialogRef<CreateOfficeDialogComponent>,
    private db: AngularFirestore,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.newOfficeForm = this.fb.group({
      name: [
        null,
        {
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      email: [
        null,
        {
          validators: [Validators.required, Validators.pattern(regex.email)],
        },
      ],
      tellNumber: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.phone),
            Validators.minLength(9),
          ],
        },
      ],
      officeAddress: [
        null,
        {
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      maxOfficeOccupants: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.numbers),
            Validators.min(1),
          ],
        },
      ],
    });
  }

  onClickAddOfficeToDB() {
    if (this.newOfficeForm.valid) {
      const value = this.newOfficeForm.value;
      const id = this.db.createId();
      const office: Office = {
        id: id,
        officeName: value.name,
        officeEmail: value.email,
        officeTellNumber: value.tellNumber,
        officeLocation: value.officeAddress,
        maxOfficeOccupants: value.maxOfficeOccupants,
        officeColor: 'black',
      };

      // this.store.dispatch(new fromOffice)
    }
  }

  onClickCloseDialog() {
    this.matdialogRef.close();
  }
}
