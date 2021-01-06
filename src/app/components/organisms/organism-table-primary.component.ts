import {Component, Input, OnInit} from '@angular/core';
import {ModuleTableService} from '../../services/modules/module-table.service';
import {TableModel} from '../../models/table-model';
import {ButtonModel} from '../../models/button-model';

@Component({
  selector: 'app-organism-table-primary',
  template: `
    <app-molecule-table-tools *ngIf="activateTools" [buttons]="buttons"></app-molecule-table-tools>
    <table class="table">
      <thead atom-table-header class="thead-dark" [headerData]="headerData"></thead>
      <tbody atom-table-row [tableData]="tableData" [actions]="actions"></tbody>
    </table>
  `,
  styles: [
  ],
  providers: [ModuleTableService]
})
export class OrganismTablePrimaryComponent implements OnInit {

  @Input() headerData!: string[];
  @Input() tableData!: TableModel[];
  @Input() activateTools!: boolean;
  @Input() buttons!: ButtonModel[];
  @Input() actions!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
