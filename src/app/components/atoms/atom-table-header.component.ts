import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-atom-table-header, thead[atom-table-header]',
  template: `
    <tr>
      <th scope="col" *ngFor="let data of headerData">{{data}}</th>
    </tr>
  `,
  styles: []
})
export class AtomTableHeaderComponent implements OnInit {

  @Input() headerData!: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
