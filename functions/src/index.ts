import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import { firestore } from 'firebase-admin';

const db = admin.firestore();
export const increaseTotalEmployees = functions.firestore
  .document('staff/{staffId}')
  .onCreate(async (snapshot, context) => {
    const staffData = snapshot.data();

    const officeRef = db.doc(`offices/${staffData.officeId}`);

    return officeRef.update({
      totalEmployees: firestore.FieldValue.increment(1),
    });
  });

export const decreaseTotalEmployees = functions.firestore
  .document('staff/{staffId}')
  .onDelete(async (snapshot, context) => {
    const staffData = snapshot.data();

    const officeRef = db.doc(`offices/${staffData.officeId}`);

    return officeRef.update({
      totalEmployees: firestore.FieldValue.increment(-1),
    });
  });
