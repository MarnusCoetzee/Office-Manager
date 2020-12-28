import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BoardRoom } from '@app/models/backend';
import { regex } from '@app/shared/utils/regex';
import * as fromRoot from '@app/store';
import { Store } from '@ngrx/store';
import * as fromList from '../../store/boardrooms';
import { BoardRoomCreateRequest } from '../../store/boardrooms/boardrooms.models';
@Component({
  selector: 'app-create-new-boardroom-dialog',
  templateUrl: './create-new-boardroom-dialog.component.html',
  styleUrls: ['./create-new-boardroom-dialog.component.scss'],
})
export class CreateNewBoardroomDialogComponent implements OnInit {
  regex = regex;
  form: FormGroup;
  officeId: string;
  constructor(
    private dialogRef: MatDialogRef<CreateNewBoardroomDialogComponent>,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<fromRoot.State>,
    private db: AngularFirestore
  ) {
    this.officeId = data.officeId;
  }

  ngOnInit(): void {
    this.intiForm();
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }

  private intiForm() {
    this.form = this.fb.group({
      name: ['', { validators: [Validators.required] }],
      seats: [
        '',
        {
          validators: [
            Validators.required,
            Validators.min(0),
            Validators.pattern(regex.numbers),
          ],
        },
      ],
    });
  }

  onClickSaveBoardroom() {
    console.log(this.officeId);
    if (this.form.valid) {
      const name = this.form.value.name;
      const seats = this.form.value.seats;
      const id = this.db.createId();
      const officeId = this.officeId;
      const boardroom: BoardRoom = {
        name,
        seats,
        officeId,
        id,
        available: true,
        bookings: null,
      };
      this.store.dispatch(new fromList.Create(boardroom));
    }
    this.dialogRef.close();
  }
}
