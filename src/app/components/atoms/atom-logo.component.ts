import { Component, OnInit } from '@angular/core';
import { ConfigApp } from '../../config/ConfigApp';

@Component({
  selector: 'app-atom-logo, a[atom-logo]',
  template: `
    <img [src]="logo" alt="Logo" width="35" height="35">
  `,
  styles: [],
})
export class AtomLogoComponent implements OnInit {

  logo: any;

  constructor() {
    this.logo = ConfigApp.logo;
  }

  ngOnInit(): void {
  }

}
