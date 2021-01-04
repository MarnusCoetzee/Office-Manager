import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meeting, Staff } from '@app/models/backend';
import { regex } from '@app/shared/utils/regex';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromMeetings from '../../store/meetings-store';
import * as fromStaff from '../../../staff/store/staff-list';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { NotificationService } from '@app/shared';
@Component({
  selector: 'app-update-meeting-dialog',
  templateUrl: './update-meeting-dialog.component.html',
  styleUrls: ['./update-meeting-dialog.component.scss'],
})
export class UpdateMeetingDialogComponent implements OnInit {
  meeting: Meeting;
  form: FormGroup;
  regex = regex;
  staff$: Observable<Staff[]>;
  selectedStaff: Staff[];
  allStaff: Staff[];
  public date: any;
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
  public dateControl: FormControl;
  constructor(
    private dialogRef: MatDialogRef<UpdateMeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private notify: NotificationService
  ) {
    this.meeting = data.meeting;
  }

  ngOnInit(): void {
    this.initForm();
    this.date = new Date(this.meeting.startDate.seconds * 1000);
    this.dateControl = new FormControl(this.date, Validators.required);
    this.staff$ = this.store.pipe(select(fromStaff.selectAll));
    this.staff$.subscribe((staffResult) => {
      this.allStaff = staffResult;
    });
    this.selectedStaff = this.meeting.staff;
  }

  formatLabel(value: number) {
    if (value >= 5) {
      return value + 'minutes';
    }

    return value;
  }

  private initForm() {
    this.form = this.fb.group({
      agenda: [this.meeting.agenda, { validators: [Validators.required] }],
      staff: new FormControl(this.meeting.staff, {
        validators: [Validators.required],
      }),
      duration: [this.meeting.duration, { validators: [Validators.required] }],
    });
  }

  compareWith(staff1: any, staff2: any): boolean {
    return staff1 && staff2 && staff1.id === staff2.id;
  }

  onClickUpdateMeeting() {
    if (this.form.valid) {
      const id = this.meeting.id;
      const officeId = this.meeting.boardroom.officeId;
      const boardroom = this.meeting.boardroom;
      const agenda = this.form.value.agenda;
      const staff: Staff[] = this.form.value.staff;
      const startDate = this.dateControl.value;
      const duration = this.form.value.duration;
      const meeting: Meeting = {
        id,
        officeId,
        boardroom,
        agenda,
        staff,
        startDate,
        duration,
      };
      this.store.dispatch(new fromMeetings.Update(meeting));
      this.dialogRef.close();
      this.notify.success('Successfully updated meeting');
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
