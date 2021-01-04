import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardRoom } from '@app/models/backend';
import { NotificationService } from '@app/shared';
import { regex } from '@app/shared/utils/regex';
import * as fromRoot from '@app/store';
import { Store } from '@ngrx/store';
import * as fromList from '../../store/boardrooms';
@Component({
  selector: 'app-edit-boardroom-dialog',
  templateUrl: './edit-boardroom-dialog.component.html',
  styleUrls: ['./edit-boardroom-dialog.component.scss'],
})
export class EditBoardroomDialogComponent implements OnInit {
  boardroom: BoardRoom;
  form: FormGroup;
  regex = regex;
  constructor(
    private dialogRef: MatDialogRef<EditBoardroomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private notify: NotificationService
  ) {
    this.boardroom = data.boardroom;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: [this.boardroom.name, { validators: [Validators.required] }],
      seats: [
        this.boardroom.seats,
        {
          validators: [Validators.required, Validators.pattern(regex.numbers)],
        },
      ],
    });
  }

  get name(): any {
    return this.form.get('name');
  }

  get seats(): any {
    return this.form.get('seats');
  }

  onClickClearTextField(id: string) {
    switch (id) {
      case 'name':
        this.name.reset();
        break;
      case 'seats':
        this.seats.reset();
        break;
    }
  }

  onClickUpdateBoardroom() {
    if (this.form.valid) {
      const name = this.form.value.name;
      const seats = this.form.value.seats;
      const id = this.boardroom.id;
      const officeId = this.boardroom.officeId;
      const boardroom: BoardRoom = {
        name,
        seats,
        id,
        officeId,
        available: true,
      };
      this.store.dispatch(new fromList.Update(boardroom));
      this.dialogRef.close();
      this.notify.success('Successfully updated boardroom');
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
