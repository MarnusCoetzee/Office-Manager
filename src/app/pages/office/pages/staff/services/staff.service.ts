import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Staff } from '@app/models/backend';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private afs: AngularFirestore) {}

  readAllStaff(officeId: string) {
    return this.afs
      .collection('staff', (ref) => ref.where('officeId', '==', officeId))
      .snapshotChanges();
  }

  createNewStaff(staff: Staff, officeId: string) {
    return this.afs.collection('staff').doc(staff.id).set(staff);
  }
}
