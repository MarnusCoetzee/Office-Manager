import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Staff } from '@app/models/backend';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private afs: AngularFirestore) {}

  readAllStaff(officeId: string) {
    return this.afs
      .collection('offices')
      .doc(officeId)
      .collection('staff')
      .snapshotChanges();
  }

  createNewStaff(staff: Staff, officeId: string) {
    return this.afs
      .collection('offices')
      .doc(officeId)
      .collection('staff')
      .add(staff);
  }
}
