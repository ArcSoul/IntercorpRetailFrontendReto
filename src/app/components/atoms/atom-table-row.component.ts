import { Component, Input, OnInit } from '@angular/core';
import { ModuleTableService } from '../../services/modules/module-table.service';
import { TableModel } from '../../models/table-model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-atom-table-row, tbody[atom-table-row]',
  template: `
    <tr *ngFor="let rowData of tableData" [ngClass]="{'select-row': rowData.id === valueSelected}">
      <td *ngFor="let dato of rowData.data" style="vertical-align: middle;">
        {{dato}}
      </td>
    </tr>
  `,
  styles: [
    `
      .select-row {
        background: #61aeee;
      }
    `,
  ],
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
