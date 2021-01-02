import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatabaseService } from './services/database.service';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JoinComponent implements OnInit {
  authSubscription: Subscription;
  isAuth: boolean;
  officeId: string;
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private dbService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.authSubscription = this.afAuth.authState.subscribe((authResult) => {
      if (authResult) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  onClickInitUser() {
    this.dbService.onClickInitUser();
  }
}
