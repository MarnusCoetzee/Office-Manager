import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-office-dialog',
  templateUrl: './create-office-dialog.component.html',
  styleUrls: ['./create-office-dialog.component.scss'],
})
export class CreateOfficeDialogComponent implements OnInit {
  newOfficeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matdialogRef: MatDialogRef<CreateOfficeDialogComponent>
  ) {}

  ngOnInit(): void {}

  onClickCloseDialog() {
    this.matdialogRef.close();
  }
}
