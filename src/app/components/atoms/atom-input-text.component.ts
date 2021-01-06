import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-atom-input-text',
  template: `
    <div class="form-group">
      <label class="form-control-label" [htmlFor]="identifierInput">{{labelInput}}</label>
      <input
        class="form-control input-md"
        [id]="identifierInput"
        [name]="identifierInput"
        [disabled]="inputDisabled"
        type="text"
        placeholder="Escriba su {{placeholderInput}}"
        [ngModel]="valueInput"
        (ngModelChange)="procesoCambioValorInput($event)"
      >
    </div>
  `,
  styles: []
})
export class AtomInputTextComponent implements OnInit {

  /* Variables de entrada */
  @Input() labelInput: string;
  @Input() identifierInput: string;
  @Input() valueInput!: string;
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
