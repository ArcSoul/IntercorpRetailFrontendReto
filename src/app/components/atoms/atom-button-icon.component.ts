import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-atom-button-icon',
  template: `
    <button
      *ngIf="visible"
      class="btn btn-light rounded-circle btn-circle btn-sm"
      [routerLink]="[routerButton]"
    >
      <i class="material-icons">{{nameIcon}}</i>
    </button>
  `,
  styles: []
})
export class AtomButtonIconComponent implements OnInit {

  /* Variables de entrada */
  @Input() routerButton?: string;
  @Input() nameIcon?: string;
  @Input() visible!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
