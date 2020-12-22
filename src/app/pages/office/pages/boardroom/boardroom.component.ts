import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardRoom } from '@app/models/backend/boardroom';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromList from '../../../home/store/offices';
@Component({
  selector: 'app-boardroom',
  templateUrl: './boardroom.component.html',
  styleUrls: ['./boardroom.component.scss'],
})
export class BoardroomComponent implements OnInit {
  officeId: string;
  boardRooms$: Observable<BoardRoom[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(new fromList.ReadBoardRoom(this.officeId));
    // this.boardRooms$ = this.store.pipe(select(fromList.selectAll));
  }
}
