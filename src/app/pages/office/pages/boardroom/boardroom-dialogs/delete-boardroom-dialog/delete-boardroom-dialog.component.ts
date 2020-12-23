import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardRoom } from '@app/models/backend';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/boardrooms';
@Component({
  selector: 'app-delete-boardroom-dialog',
  templateUrl: './delete-boardroom-dialog.component.html',
  styleUrls: ['./delete-boardroom-dialog.component.scss'],
})
export class DeleteBoardroomDialogComponent implements OnInit {
  boardroom: BoardRoom;

  constructor(
    private dialogRef: MatDialogRef<DeleteBoardroomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<fromRoot.State>
  ) {
    this.boardroom = data.boardroom;
  }

  ngOnInit(): void {
    console.log(this.boardroom);
  }

  onClickDeleteBoardroom() {
    this.store.dispatch(new fromList.Delete(this.boardroom));
    this.dialogRef.close();
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
