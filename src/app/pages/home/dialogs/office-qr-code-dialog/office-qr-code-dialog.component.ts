import { Component, OnInit } from '@angular/core';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-office-qr-code-dialog',
  templateUrl: './office-qr-code-dialog.component.html',
  styleUrls: ['./office-qr-code-dialog.component.scss'],
})
export class OfficeQrCodeDialogComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  constructor() {}

  ngOnInit(): void {}
}
