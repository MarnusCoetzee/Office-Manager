import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { regex } from '../../../../shared/utils/regex';
import { Office } from '../../store/offices';
import * as fromOffice from '../../store/offices';
import * as fromRoot from '../../../../store';
import { off } from 'process';
import { AngularFireAuth } from '@angular/fire/auth';
import { officeColors, Color } from '@app/models/backend/colours';
import { NotificationService } from '@app/shared';
@Component({
  selector: 'app-create-office-dialog',
  templateUrl: './create-office-dialog.component.html',
  styleUrls: ['./create-office-dialog.component.scss'],
})
export class CreateOfficeDialogComponent implements OnInit {
  // office colours
  officeColours: Color[] = officeColors;
  // office colour default
  selectedColour: string = 'black';
  newOfficeForm: FormGroup;
  regex = regex;
  constructor(
    private fb: FormBuilder,
    private matdialogRef: MatDialogRef<CreateOfficeDialogComponent>,
    private db: AngularFirestore,
    private store: Store<fromRoot.State>,
    private afAuth: AngularFireAuth,
    private notify: NotificationService
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

  async onClickAddOfficeToDB() {
    if (this.newOfficeForm.valid) {
      const value = this.newOfficeForm.value;
      const id = this.db.createId();
      const ownerId = await (await this.afAuth.currentUser).uid;
      const office: Office = {
        ownerId,
        id: id,
        officeName: value.name,
        officeEmail: value.email,
        officeTellNumber: value.tellNumber,
        officeLocation: value.officeAddress,
        maxOfficeOccupants: value.maxOfficeOccupants,
        officeColor: this.selectedColour,
        totalEmployees: 0,
      };

      this.store.dispatch(new fromOffice.Create(office));

      this.matdialogRef.close();
      this.notify.success('Successfully Created Office');
    }
  }

  onClickCloseDialog() {
    this.matdialogRef.close();
  }
}
