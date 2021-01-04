export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  cellNumber: string;
  photoUrl: string;
  created: any;
  updated?: firebase.default.firestore.FieldValue;
  roleId: string;
}
