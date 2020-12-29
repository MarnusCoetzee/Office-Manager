import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardRoom, Staff } from '@app/models/backend';
import * as fromStaff from '../../../staff/store/staff-list';
@Component({
  selector: 'app-create-meeting-dialog',
  templateUrl: './create-meeting-dialog.component.html',
  styleUrls: ['./create-meeting-dialog.component.scss'],
})
export class CreateMeetingDialogComponent implements OnInit {
  boardroom: BoardRoom;
  form: FormGroup;
  staff$: Observable<Staff>;
  selectedStaff: Staff[];
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = true;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  public dateControl = new FormControl('', Validators.required);
  constructor(
    private dialogRef: MatDialogRef<CreateMeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private db: AngularFirestore
  ) {
    this.boardroom = data.boardroom;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      agenda: [null, { validators: [Validators.required] }],
    });
  }

  onClickAddMeeting() {
    if (this.form.valid) {
      const id = this.db.createId();
      const officeId = this.boardroom.officeId;
      const boardroom = this.boardroom;
      const agenda = this.form.value.agenda;
      const staff: Staff[] = this.selectedStaff;
      const startDate = this.dateControl.value;
      const duration = this.form.value.duration;
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
