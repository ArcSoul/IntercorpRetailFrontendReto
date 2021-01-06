import {Component, Input, OnInit} from '@angular/core';
import {ModuleTableService} from '../../services/modules/module-table.service';
import {TableModel} from '../../models/table-model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-atom-table-row, tbody[atom-table-row]',
  template: `
    <tr *ngFor="let rowData of tableData" [ngClass]="{'select-row': rowData.id === valueSelected}">
      <td *ngFor="let dato of rowData.data" style="text-align: center; vertical-align: middle;">
        <ng-container *ngIf="dato.includes('ACTIONS@@')">
          <app-atom-button-click
           [eventClickInput]="getDocumento.bind(this, actions[dato.split('@@')[1]])"
          >Descargar</app-atom-button-click>
        </ng-container>
        <ng-container *ngIf="dato.includes('IMAGES@@')">
            <img [src]="'assets/images/reniec/' + dato.split('@@')[1] + '.png'" alt="reniec" width="25" height="25">
        </ng-container>
        <ng-container *ngIf="!dato.includes('ACTIONS@@') && !dato.includes('IMAGES@@')">
          {{dato}}
        </ng-container>
      </td>
    </tr>
  `,
  styles: [
    `
      .select-row {
        background: #61aeee;
      }
    `
  ]
})
export class AtomTableRowComponent implements OnInit {

  @Input() tableData!: TableModel[];
  @Input() actions!: string[];

  valueSelected: number;

  constructor(private moduleTableService: ModuleTableService, private _sanitizer: DomSanitizer) {
    this.valueSelected = moduleTableService.valorDeLaSeleccion;
  }

  ngOnInit(): void {
  }

  getDocumento(urlDocumento: string): void {
    window.open(urlDocumento);
  }
}
