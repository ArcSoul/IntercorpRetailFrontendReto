import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atom-input-select, div[atom-input-select]',
  template: `
    <label *ngIf="activateLabel" [htmlFor]="identifierInput">{{labelInput}}</label>
    <select
      class="form-control"
      [id]="identifierInput"
      [ngModel]="valueInput"
      (ngModelChange)="getValueInput($event.target.value)"
    >
      <option
        *ngFor="let option of optionsData"
        [value]="option"
      >
        {{option}}
      </option>
    </select>
  `,
  styles: [
  ]
})
export class AtomInputSelectComponent implements OnInit {

  /* Variables de entrada */
  @Input() labelInput!: string;
  @Input() identifierInput!: string;
  @Input() optionsData!: any[];
  @Input() valueInput!: number;
  @Input() activateLabel!: boolean;
  @Output() valueInputChange: EventEmitter<number>;

  constructor() {
    this.valueInputChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  getValueInput(valueInput: number): void {
    this.valueInputChange.emit(valueInput);
  }

}
