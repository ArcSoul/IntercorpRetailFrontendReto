import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atom-input-number',
  template: `
    <div class="form-group">
      <label class="form-control-label" [htmlFor]="identifierInput">{{labelInput}}</label>
      <input
        class="form-control input-md"
        [id]="identifierInput"
        [name]="identifierInput"
        [disabled]="inputDisabled"
        type="number"
        placeholder="Escriba su {{placeholderInput}}"
        [ngModel]="valueInput"
        (ngModelChange)="procesoCambioValorInput($event)"
      >
    </div>
  `,
  styles: [],
})
export class AtomInputNumberComponent implements OnInit {

  /* Variables de entrada */
  @Input() labelInput: string;
  @Input() identifierInput: string;
  @Input() valueInput!: string | number;
  @Input() inputDisabled!: boolean;
  @Output() valueInputChange: EventEmitter<string>;

  /* Declaración de variables */
  placeholderInput: string;

  constructor() {
    this.labelInput = '';
    this.identifierInput = '';
    this.placeholderInput = '';
    this.valueInputChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.placeholderInput = this.identifierInput.replace('-', ' ');
  }

  procesoCambioValorInput(nuevoValorDelInput: string): void {
    this.valueInputChange.emit(nuevoValorDelInput);
  }

}
