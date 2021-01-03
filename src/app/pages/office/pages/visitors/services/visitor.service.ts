import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Visitor } from '@app/models/backend/visitor';
@Injectable({
  providedIn: 'root',
})
export class VisitorService {
  constructor(private afs: AngularFirestore) {}

  readAllVisitors(officeId: string) {
    return this.afs
      .collection('visitors', (ref) =>
        ref
          .where('officeId', '==', officeId)
          .orderBy('visitorCheckedInTime', 'desc')
      )
      .snapshotChanges();
  }
}
