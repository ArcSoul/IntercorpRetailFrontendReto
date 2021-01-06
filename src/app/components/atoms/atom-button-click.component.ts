import { Component, Input, OnInit } from '@angular/core';
import { ThemeColor } from '../../config/ConfigApp';
import {
  ThemeColorBackgroundUtils,
  ThemeColorTextUtils,
} from '../../utils/ThemeUtils';

@Component({
  selector: 'app-atom-button-click',
  template: `
    <button
      type="button"
      class="btn mb-0 btn-raised btn-block py-2"
      (click)="eventClickInput()"
      [disabled]="disabledButton"
      [ngStyle]="{'cursor': disabledButton ? 'default' : 'pointer', 'backgroundColor': themeColorActive, 'color': themeColorTextActive}"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
  ]
})
export class AtomButtonClickComponent implements OnInit {

  @Input() disabledButton: boolean;
  @Input() themeColor: ThemeColor;
  @Input() themeColorText: ThemeColor;
  @Input() eventClickInput!: () => void;

  themeColorActive!: string;
  themeColorTextActive!: string;

  constructor() {
    this.disabledButton = false;
    this.themeColor = 'primary';
    this.themeColorText = 'secondary';
  }

  ngOnInit(): void {
    this.themeColorActive = ThemeColorBackgroundUtils(this.themeColor);
    this.themeColorTextActive = ThemeColorTextUtils(this.themeColorText);
  }

}
