import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Visitor } from '@app/models/backend';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  async onClickInitUser(officeId: string) {
    const user = await this.auth.currentUser;
    return this.db.collection('visitors').doc(user.uid).set(
      {
        email: user.email,
        uid: user.uid,
        officeId: officeId,
        displayImgUrl: user.photoURL,
      },
      { merge: true }
    );
  }

  async onClickSaveBasicDetailsToDB(visitor: Visitor) {
    const user = await this.auth.currentUser;
    return this.db
      .collection('visitors')
      .doc(user.uid)
      .set(
        {
          firstName: visitor.firstName,
          lastName: visitor.lastName,
          cellNumber: visitor.cellNumber,
          idNumber: visitor.idNumber,
        },
        { merge: true }
      )
      .then(() => console.log('added details yeet!'));
  }

  async onClickSaveTemperatureToDB(visitor: Visitor) {
    const user = await this.auth.currentUser;
    return this.db.collection('visitors').doc(user.uid).set(
      {
        visitorTemperature: visitor.visitorTemperature,
        hasCovid: false,
      },
      { merge: true }
    );
  }

  async getUserDocument() {
    const user = await this.auth.currentUser;
    return this.db.collection('visitors').doc(user.uid).valueChanges();
  }

  async finishCreateVisitor(id: string) {
    const user = await this.auth.currentUser;
    const now = Date.now();
    return this.db
      .collection('visitors')
      .doc(user.uid)
      .set(
        {
          visitorCheckedInTime: now,
          visitorCheckedIn: true,
        },
        { merge: true }
      )
      .then(() => {
        this.router.navigate(['visitor/dashboard', id]);
      });
  }
}
