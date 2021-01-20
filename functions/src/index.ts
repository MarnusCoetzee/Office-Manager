import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import { firestore } from 'firebase-admin';

import * as https from 'https';

import { WebClient } from '@slack/web-api';
const bot = new WebClient(functions.config().slack.token);

const { PubSub } = require('@google-cloud/pubsub');
const pubsubClient = new PubSub();

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
        const promises: Promise = [];
        querySnapshot.forEach((doc) => {
          promises.push(doc.ref.delete());
        });
        return Promise.all(promises);
      });
  });

export const createBasicUser = functions.auth
  .user()
  .onCreate((user, context) => {
    const userRef = db.doc(`users/${user.uid}`);
    return userRef.set({
      uid: user.uid,
      created: firestore.FieldValue.serverTimestamp(),
    });
  });

export const deleteUserData = functions.auth
  .user()
  .onDelete((user, context) => {
    const userRef = db.doc(`users/${user.uid}`);
    return userRef.delete();
  });

// export const deleteUserOffices = functions.firestore
//   .document('users')
//   .onDelete(async (snapshot, context) => {
//     const data = snapshot.data();
//     const officesRef = db
//       .collection('offices')
//       .where('ownerId', '==', data.uid);
//     officesRef.get().then((res) => {
//       res.forEach((element) => {
//         element.ref.delete();
//       });
//     });
//   });

// export const deleteOfficeEmployees = functions.firestore
//   .document('offices')
//   .onDelete(async (snapshot, context) => {
//     const data = snapshot.data();
//     const staffRef = db
//       .collection('staff')
//       .where('officeId', '==', data.officeId);
//     staffRef.get().then((res) => {
//       res.forEach((element) => {
//         element.ref.delete();
//       });
//     });
//   });

// export const deleteOfficeMeetings = functions.firestore
//   .document('offices')
//   .onDelete(async (snapshot, context) => {
//     const data = snapshot.data();
//     const officesRef = db
//       .collection('staff')
//       .where('officeId', '==', data.officeId);
//     officesRef.get().then((res) => {
//       res.forEach((element) => {
//         element.ref.delete();
//       });
//     });
//   });

// export const deleteOfficeVisitors = functions.firestore
//   .document('offices')
//   .onDelete(async (snapshot, context) => {
//     const data = snapshot.data();
//     const officesRef = db
//       .collection('visitors')
//       .where('officeId', '==', data.officeId);
//     officesRef.get().then((res) => {
//       res.forEach((element) => {
//         element.ref.delete();
//       });
//     });
//   });
// export const myBot = functions.https.onRequest(async (req, res) => {
//   // Validate Signature
//   verifySlackSignature(req); // See snippet above for implementation

//   const data = JSON.stringify(req.body);
//   const dataBuffer = Buffer.from(data);

//   await pubsubClient
//     .topic('slack-channel-join')
//     .publisher()
//     .publish(dataBuffer);

//   res.sendStatus(200);
// });

export const myBot = functions.firestore
  .document('meetings/{meetingId}')
  .onCreate(async (change, context) => {
    const data = await change.data();
    const title = data.title;
    return https.request(
      `https://hooks.slack.com/services/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?message=${title}`
    );
  });
