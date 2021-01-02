import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Visitor } from 'typescript';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {}

  async onClickSignout() {
    const uid = await (await this.afAuth.currentUser).uid;
    const checkout = Date.now();
    return this.db
      .collection('visitors')
      .doc(uid)
      .set(
        {
          visitorCheckedIn: false,
          visitorCheckedOutTime: checkout,
        },
        { merge: true }
      )
      .then(async () => {
        await this.afAuth.signOut().then(() => {
          this.router.navigate(['visitor/finish']);
        });
      });
  }
}
