import {Component, Input, OnInit} from '@angular/core';
import {ButtonModel} from '../../models/button-model';

@Component({
  selector: 'app-molecule-table-tools',
  template: `
    <div class="row justify-content-end align-items-center mx-0 mb-2">
      <div class="mr-auto">
        <app-atom-button-icon
          *ngFor="let button of buttons"
          [nameIcon]="button.icon"
          [routerButton]="button.router"
          [visible]="button.position === 'left'"
        ></app-atom-button-icon>
        <app-atom-table-see-row></app-atom-table-see-row>
      </div>
      <div class="tools d-flex justify-content-end">
        <app-atom-button-icon
          *ngFor="let button of buttons"
          [nameIcon]="button.icon"
          [routerButton]="button.router"
          [visible]="button.position === 'right'"
        ></app-atom-button-icon>
      </div>
    </div>
  `,
  styles: []
})
export class MoleculeTableToolsComponent implements OnInit {

  @Input() buttons!: ButtonModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
