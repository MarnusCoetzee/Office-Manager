import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  async onClickInitUser() {
    const user = await this.auth.currentUser;
    return this.db
      .collection('visitors')
      .doc(user.uid)
      .set(
        {
          email: user.email,
          uid: user.uid,
        },
        { merge: true }
      )
      .then(() => console.log('added the user lmao'));
  }
}
