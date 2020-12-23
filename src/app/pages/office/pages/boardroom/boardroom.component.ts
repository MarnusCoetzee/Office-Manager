import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardRoom } from '@app/models/backend/boardroom';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromList from './store/boardrooms';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewBoardroomDialogComponent } from './boardroom-dialogs/create-new-boardroom-dialog/create-new-boardroom-dialog.component';
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
    private store: Store<fromRoot.State>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.boardRooms$ = this.store.pipe(select(fromList.selectAll));
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.store.dispatch(new fromList.Read(this.officeId));
  }

  onClickOpenNewBoardroomDialog() {
    const officeId = this.officeId;
    console.log(officeId);
    this.dialog.open(CreateNewBoardroomDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { officeId },
    });
  }
}
