import { Component, Input, OnInit } from '@angular/core';
import { ThemeColor } from '../../config/ConfigApp';
import { ThemeColorTextUtils } from '../../utils/ThemeUtils';

@Component({
  selector: 'app-atom-title-text',
  template: `
    <h4 [ngStyle]="{'color': themeColorActive}">
      <ng-content></ng-content>
    </h4>
  `,
  styles: [
  ]
})
export class AtomTitleTextComponent implements OnInit {

  @Input() themeColor: ThemeColor;

  themeColorActive!: string;

  constructor() {
    this.themeColor = 'primary';
  }

  ngOnInit(): void {
    this.themeColorActive = ThemeColorTextUtils(this.themeColor);
  }

}
