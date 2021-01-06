import { Component, OnInit } from '@angular/core';
import ConfigListClient from '../../../config/ConfigListClient';
import { TableModel } from '../../../models/table-model';
import { ClientService } from '../../../services/client.service';
import { ClientModel } from '../../../models/client-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  providers: [DatePipe],
  styles: [],
})
export class PageListClientComponent implements OnInit {

  titleProcess: string;
  headerData: string[];
  tableData: TableModel[];

  constructor(
    private clientService: ClientService,
    private datePipe: DatePipe,
  ) {
    this.titleProcess = ConfigListClient.title;
    this.headerData = ConfigListClient.columns;
    this.tableData = [];
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(elements => {
      this.tableData = elements.map((e: any) => {
        const clientModel: ClientModel = e.payload.doc.data();
        const modelData = new TableModel();

        modelData.data.push(clientModel.firstName);
        modelData.data.push(clientModel.lastName);
        modelData.data.push(clientModel.age);
        modelData.data.push(this.datePipe.transform(clientModel.birthdate.toDate(), 'shortDate'));

        return modelData;
      });
    });
  }

}
