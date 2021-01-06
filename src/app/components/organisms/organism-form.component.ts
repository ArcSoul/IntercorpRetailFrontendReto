import { Component, Input, OnInit } from '@angular/core';
import { InputModel } from '../../models/input-model';

@Component({
  selector: 'app-organism-form, form[organism-form]',
  template: `
    <ng-container *ngFor="let input of inputList">
      <app-atom-input-text
        *ngIf="input.type === 'text'"
        [labelInput]="input.label"
        [identifierInput]="input.id"
        [valueInput]="input.value"
        class="p-2"
        [ngClass]="getClassInput(input)"
        (valueInputChange)="setInputValue(input.id, $event)"
      ></app-atom-input-text>
      <app-atom-input-number
        *ngIf="input.type === 'number'"
        [labelInput]="input.label"
        [identifierInput]="input.id"
        [valueInput]="input.value"
        class="p-2"
        [ngClass]="getClassInput(input)"
        (valueInputChange)="setInputValue(input.id, $event)"
      ></app-atom-input-number>
      <app-atom-input-date
        *ngIf="input.type === 'date'"
        [labelInput]="input.label"
        [identifierInput]="input.id"
        [valueInput]="input.value"
        class="p-2"
        [ngClass]="getClassInput(input)"
        (valueInputChange)="setInputValue(input.id, $event)"
      ></app-atom-input-date>
    </ng-container>
    <ng-content></ng-content>
  `,
  styles: [],
})
export class OrganismFormComponent implements OnInit {

  @Input() inputList!: InputModel[];

  constructor() { }

  ngOnInit(): void {
  }

  getClassInput(input: any): string {
    return 'w-' + input.column;
  }

  setInputValue(id: string, value: any): void {
    const input = this.inputList.find(element => element.id === id);
    if (input) {
      input.value = value;
    }
  }

}
