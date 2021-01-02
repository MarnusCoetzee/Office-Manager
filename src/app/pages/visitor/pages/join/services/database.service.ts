import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Visitor } from '@app/models/backend';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  async onClickInitUser(officeId: string) {
    const user = await this.auth.currentUser;
    return this.db.collection('visitors').doc(user.uid).set(
      {
        email: user.email,
        uid: user.uid,
        officeId: officeId,
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

  async getUserDocument() {
    const user = await this.auth.currentUser;
    return this.db.collection('visitors').doc(user.uid).valueChanges();
  }
}
