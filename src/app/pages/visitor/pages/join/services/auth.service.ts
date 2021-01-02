import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  signinWithGoogle() {
    this.afAuth
      .signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
      .then((user) => {
        this.db.collection('visitors').doc(user.user.uid).set({
          email: user.user.email,
          name: user.user.uid,
        });
      });
  }
}
