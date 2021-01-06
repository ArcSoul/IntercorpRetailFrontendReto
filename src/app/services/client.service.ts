import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClientModel } from '../models/client-model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private readonly TABLE_NAME = 'client';

  constructor(private firestore: AngularFirestore) {}

  getClients(): Observable<any> {
    return this.firestore.collection(this.TABLE_NAME).snapshotChanges();
  }

  createClient(client: ClientModel): Promise<any> {
    return this.firestore.collection(this.TABLE_NAME).doc().set(Object.assign({}, client));
  }
}
