import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardRoom } from '@app/models/backend/boardroom';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromList from './store/boardrooms';
@Component({
  selector: 'app-boardroom',
  templateUrl: './boardroom.component.html',
  styleUrls: ['./boardroom.component.scss'],
})
export class BoardroomComponent implements OnInit {
  officeId: string;
  boardRooms$: Observable<BoardRoom[]>;
  loading$: Observable<boolean>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.boardRooms$ = this.store.pipe(select(fromList.selectAll));
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.store.dispatch(new fromList.Read(this.officeId));
  }
}
