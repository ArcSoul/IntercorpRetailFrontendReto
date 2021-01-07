import { Component, OnInit } from '@angular/core';
import { ConfigAnalystClient } from '../../../config/ConfigAnalystClient';
import { InputModel } from '../../../models/input-model';
import { ClientService } from '../../../services/client.service';
import { ClientModel } from '../../../models/client-model';

@Component({
  selector: 'app-page-analyst-client',
  templateUrl: './page-analyst-client.component.html',
  styles: [],
})
export class PageAnalystClientComponent implements OnInit {

  titleProcess: string;
  inputList: InputModel[];

  constructor(private clientService: ClientService) {
    this.titleProcess = ConfigAnalystClient.title;
    this.inputList = ConfigAnalystClient.input;
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(elements => {
      for (let i = 0; i < this.inputList.length; i++) {
        if (this.inputList[i].id === 'promedio-edad') {
          this.inputList[i].value = this.getAverageAge(elements);
        } else if (this.inputList[i].id === 'desviacion-estandar-edad') {
          this.inputList[i].value = this.getStandardDeviation(elements);
        }
      }
    });
  }

  getAverageAge(elements: any): number {
    const arrayAge = elements.map((element: any) => {
      const clientModel: ClientModel = element.payload.doc.data();

      return clientModel.age;
    });
    const n = arrayAge.length;
    const mean = arrayAge.reduce((a: number, b: number) => a + b) / n;

    return mean;
  }

  getStandardDeviation(elements: any): number {
    const arrayAge = elements.map((element: any) => {
      const clientModel: ClientModel = element.payload.doc.data();

      return clientModel.age;
    });
    const n = arrayAge.length;
    const mean = arrayAge.reduce((a: number, b: number) => a + b) / n;

    return Math.sqrt(arrayAge.map((x: number) => Math.pow(x - mean, 2)).reduce((a: number, b: number) => a + b) / n);
  }

}
