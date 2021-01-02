import { Component, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authSubscription: Subscription;
  isAuth: boolean;
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.afAuth.authState.subscribe((authResult) => {
      if (authResult) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  onClickSigninWithGoogle() {
    this.authService.signinWithGoogle();
  }
}
