import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Office } from '../../store/offices';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/offices';
import { NotificationService } from '@app/shared';
@Component({
  selector: 'app-delete-office-dialog',
  templateUrl: './delete-office-dialog.component.html',
  styleUrls: ['./delete-office-dialog.component.scss'],
})
export class DeleteOfficeDialogComponent implements OnInit {
  office: Office;
  constructor(
    private dialogRef: MatDialogRef<DeleteOfficeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<fromRoot.State>,
    private notify: NotificationService
  ) {
    this.office = data.office;
  }

  ngOnInit(): void {}

  onClickCloseDialog() {
    this.dialogRef.close();
  }

  onClickDeleteOffice() {
    const id = this.office.id;
    this.store.dispatch(new fromList.Delete(id));
    this.dialogRef.close();
    this.notify.success('Successfully Deleted Office');
  }
}
