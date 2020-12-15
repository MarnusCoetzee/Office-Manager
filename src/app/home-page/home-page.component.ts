import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthBottomSheetComponent } from './auth-bottom-sheet/auth-bottom-sheet.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  onClickOpenAuthBottomSheet() {
    this._bottomSheet.open(AuthBottomSheetComponent);
  }
}
