import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meeting } from '@app/models/backend';
import * as fromRoot from '@app/store';
import { Store } from '@ngrx/store';
import * as fromMeetings from '../../store/meetings-store';
@Component({
  selector: 'app-delete-meeting-dialog',
  templateUrl: './delete-meeting-dialog.component.html',
  styleUrls: ['./delete-meeting-dialog.component.scss'],
})
export class DeleteMeetingDialogComponent implements OnInit {
  meeting: Meeting;
  constructor(
    private dialogRef: MatDialogRef<DeleteMeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<fromRoot.State>
  ) {
    this.meeting = data.meeting;
  }

  ngOnInit(): void {}

  onClickCloseDialog() {
    this.dialogRef.close();
  }

  onClickDeleteMeeting() {
    this.store.dispatch(new fromMeetings.Delete(this.meeting));
    this.dialogRef.close();
  }
}
