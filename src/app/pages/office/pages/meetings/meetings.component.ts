import { Component, OnInit } from '@angular/core';
import { Meeting } from '@app/models/backend';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromList from './store/meetings-store';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { UpdateMeetingDialogComponent } from './dialogs/update-meeting-dialog/update-meeting-dialog.component';
import { DeleteMeetingDialogComponent } from './dialogs/delete-meeting-dialog/delete-meeting-dialog.component';
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent implements OnInit {
  meetings$: Observable<Meeting[]>;
  meetings: Array<Meeting>;
  upcomingMeetings: Array<Meeting>;
  pastMeetings: Array<Meeting>;
  loading$: Observable<boolean>;
  officeId: string;
  now = Date.now();

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.meetings$ = this.store.pipe(select(fromList.selectAll));
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.store.dispatch(new fromList.Read(this.officeId));
  }

  onClickOpenEditMeetingDialog(meeting: Meeting) {
    this.dialog.open(UpdateMeetingDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { meeting },
    });
  }

  onClickOpenDeleteMeetingDialog(meeting: Meeting) {
    this.dialog.open(DeleteMeetingDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { meeting },
    });
  }
}
