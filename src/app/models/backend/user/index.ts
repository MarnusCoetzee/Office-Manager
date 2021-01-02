export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  cellNumber: string;
  photoUrl: string;
  created: firebase.default.firestore.FieldValue;
  updated?: firebase.default.firestore.FieldValue;
  roleId: string;
}
