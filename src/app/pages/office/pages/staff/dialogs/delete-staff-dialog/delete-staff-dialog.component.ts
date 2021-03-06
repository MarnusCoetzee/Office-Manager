import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Staff } from '@app/models/backend';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/staff-list';
import { NotificationService } from '@app/shared';
@Component({
  selector: 'app-delete-staff-dialog',
  templateUrl: './delete-staff-dialog.component.html',
  styleUrls: ['./delete-staff-dialog.component.scss'],
})
export class DeleteStaffDialogComponent implements OnInit {
  staff: Staff;
  constructor(
    private dialogRef: MatDialogRef<DeleteStaffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<fromRoot.State>,
    private notify: NotificationService
  ) {
    this.staff = data.staff;
  }

  ngOnInit(): void {}

  onClickDeleteStaffMember() {
    this.store.dispatch(new fromList.Delete(this.staff));
    this.dialogRef.close();
    this.notify.success('Successfully removed staff member');
  }

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
