import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
import { Office } from '../../store/offices';
@Component({
  selector: 'app-office-qr-code-dialog',
  templateUrl: './office-qr-code-dialog.component.html',
  styleUrls: ['./office-qr-code-dialog.component.scss'],
})
export class OfficeQrCodeDialogComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  joinValue: string;
  leaveValue: string;
  office: Office;
  constructor(
    private dialog: MatDialogRef<OfficeQrCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.office = data.office;
  }

  ngOnInit(): void {
    this.joinValue = `https://office-app-f5811.web.app/visitor/join/${this.office.id}`;
    this.leaveValue = `https://office-app-f5811.web.app/visitor/leave/${this.office.id}`;
  }
}
