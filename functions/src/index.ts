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

export const deletePastMeetings = functions
  .runWith({ memory: '2GB' })
  .pubsub.schedule('*/15 * * * *')
  .onRun(async (context) => {
    // time stamp
    const now = admin.firestore.Timestamp.now();
    return db
      .collection('meetings')
      .where('startDate', '<', now)
      .get()
      .then((querySnapshot) => {
        // @ts-ignore
        const promises = [];
        querySnapshot.forEach((doc) => {
          promises.push(doc.ref.delete());
        });
        // @ts-ignore
        return Promise.all(promises);
      });
  });
