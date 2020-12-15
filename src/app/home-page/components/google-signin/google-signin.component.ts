import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss'],
})
export class GoogleSigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClickSigninWithGoogle() {
    console.log('Google Sign In');
  }
}
