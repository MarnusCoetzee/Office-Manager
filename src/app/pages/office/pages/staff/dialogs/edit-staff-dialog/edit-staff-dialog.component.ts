import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Staff } from '@app/models/backend';

@Component({
  selector: 'app-edit-staff-dialog',
  templateUrl: './edit-staff-dialog.component.html',
  styleUrls: ['./edit-staff-dialog.component.scss'],
})
export class EditStaffDialogComponent implements OnInit {
  staff: Staff;
  constructor(
    private dialogRef: MatDialogRef<EditStaffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.staff = data.staff;
  }

  ngOnInit(): void {}

  onClickCloseDialog() {
    this.dialogRef.close();
  }
}
