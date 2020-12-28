import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BoardRoom } from '@app/models/backend';

@Injectable({
  providedIn: 'root',
})
export class BoardroomService {
  constructor(private afs: AngularFirestore) {}

  readAllBoardRooms(officeId: string) {
    return this.afs
      .collection('boardrooms', (ref) => ref.where('officeId', '==', officeId))
      .snapshotChanges();
  }

  createNewBoardroom(boardroom: BoardRoom, officeId: string) {
    return this.afs.collection('boardrooms').doc(boardroom.id).set(boardroom);
  }
}
