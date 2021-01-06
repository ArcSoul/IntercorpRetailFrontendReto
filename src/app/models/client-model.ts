import firebase from 'firebase';
import firestore = firebase.firestore;

export class ClientModel {
  firstName!: string;
  lastName!: string;
  age!: number;
  birthdate!: firestore.Timestamp;
}
