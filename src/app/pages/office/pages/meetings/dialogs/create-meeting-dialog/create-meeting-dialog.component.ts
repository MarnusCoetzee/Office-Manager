import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { MatOption, ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardRoom, Meeting, Staff } from '@app/models/backend';
import * as fromStaff from '../../../staff/store/staff-list';
import * as fromMeeting from '../../store/meetings-store';
import * as fromRoot from '@app/store';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-create-meeting-dialog',
  templateUrl: './create-meeting-dialog.component.html',
  styleUrls: ['./create-meeting-dialog.component.scss'],
})
export class CreateMeetingDialogComponent implements OnInit {
  boardroom: BoardRoom;
  form: FormGroup;
  staff$: Observable<Staff[]>;
  selectedStaff: Staff[];
  allStaff: Staff[];
  @ViewChild('allSelected') private allSelected: MatOption;
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

  formatLabel(value: number) {
    if (value >= 5) {
      return value + 'minutes';
    }

    return value;
  }

  public dateControl = new FormControl('', Validators.required);
  constructor(
    private dialogRef: MatDialogRef<CreateMeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private db: AngularFirestore,
    private store: Store<fromRoot.State>
  ) {
    this.boardroom = data.boardroom;
  }

  ngOnInit(): void {
    this.initForm();
    this.staff$ = this.store.pipe(select(fromStaff.selectAll));
    this.staff$.subscribe((staffResult) => {
      this.allStaff = staffResult;
    });
  }

  private initForm() {
    this.form = this.fb.group({
      agenda: [null, { validators: [Validators.required] }],
      staff: new FormControl(null, { validators: [Validators.required] }),
      duration: [5, { validators: [Validators.required] }],
    });
  }

  onClickAddMeeting() {
    if (this.form.valid) {
      const id = this.db.createId();
      const officeId = this.boardroom.officeId;
      const boardroom = this.boardroom;
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
      this.store.dispatch(new fromMeeting.Create(meeting));
      this.dialogRef.close();
    }
  }

  togglePerOne(all) {
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if (this.form.controls.staff.value.length == this.allStaff.length)
      this.allSelected.select();
  }

  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.form.controls.staff.patchValue([
        ...this.allStaff.map((item) => item),
      ]);
    } else {
      this.form.controls.staff.patchValue([]);
    }
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
