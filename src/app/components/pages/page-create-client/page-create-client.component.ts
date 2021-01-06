import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { ClientModel } from '../../../models/client-model';
import Swal from 'sweetalert2';
import { InputModel } from '../../../models/input-model';
import { ConfigCreateClient } from '../../../config/ConfigCreateClient';

@Component({
  selector: 'app-page-create-client',
  templateUrl: './page-create-client.component.html',
  styles: [],
})
export class PageCreateClientComponent implements OnInit {

  clientRequest: ClientModel;
  inputList: InputModel[];
  titleProcess: string;

  constructor(private clientService: ClientService) {
    this.clientRequest = new ClientModel();
    this.inputList = ConfigCreateClient.input;
    this.titleProcess = ConfigCreateClient.title;
  }

  ngOnInit(): void {
  }

  createClient(): void {
    for (const input of this.inputList) {
      if (input.id === 'nombres' && typeof input.value === 'string') {
        this.clientRequest.firstName = input.value;
      } else if (input.id === 'apellidos' && typeof input.value === 'string') {
        this.clientRequest.lastName = input.value;
      } else if (input.id === 'edad' && typeof input.value === 'number') {
        this.clientRequest.age = input.value;
      } else if (input.id === 'fecha-de-nacimiento' && typeof input.value === 'string') {
        this.clientRequest.birthdate = new Date(input.value);
      }
    }
    this.clientService.createClient(this.clientRequest).then(() => {
      Swal.fire('¡Operación exitosa!', 'Se ha creado con éxito el cliente', 'success');
    });
  }

}
