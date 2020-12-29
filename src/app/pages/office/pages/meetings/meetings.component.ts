import { Component, OnInit } from '@angular/core';
import { Meeting } from '@app/models/backend';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromList from './store/meetings-store';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
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

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.meetings$ = this.store.pipe(select(fromList.selectAll));
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.store.dispatch(new fromList.Read(this.officeId));
    this.meetings$.subscribe((meetingsResult) => {
      this.meetings = meetingsResult;
    });
  }

  filterMeetings() {}
}
