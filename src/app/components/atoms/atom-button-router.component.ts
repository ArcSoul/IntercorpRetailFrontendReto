import { Component, Input, OnInit } from '@angular/core';
import { ThemeColor } from '../../config/ConfigApp';
import {
  ThemeColorBackgroundUtils,
  ThemeColorTextUtils,
} from '../../utils/ThemeUtils';

@Component({
  selector: 'app-atom-button-router',
  template: `
    <button
      type="button"
      class="btn mb-0 btn-raised btn-block py-2"
      [disabled]="disabledInput"
      [ngStyle]="{'cursor': disabledInput ? 'default' : 'pointer', 'backgroundColor': themeColorActive, 'color': themeColorTextActive}"
      [routerLink]="[routerLink]"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class AtomButtonRouterComponent implements OnInit {

  @Input() disabledInput: boolean;
  @Input() routerLink!: string;
  @Input() themeColor: ThemeColor;
  @Input() themeColorText: ThemeColor;

  themeColorActive!: string;
  themeColorTextActive!: string;

  constructor() {
    this.disabledInput = false;
    this.themeColor = 'primary';
    this.themeColorText = 'primary';
  }

  ngOnInit(): void {
    this.themeColorActive = ThemeColorBackgroundUtils(this.themeColor);
    this.themeColorTextActive = ThemeColorTextUtils(this.themeColorText);
  }

}
