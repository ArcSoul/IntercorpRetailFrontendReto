import { Component, OnInit } from '@angular/core';
import { ConfigApp } from '../../config/ConfigApp';

@Component({
  selector: 'app-organism-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark" [ngStyle]="{'backgroundColor': background}">
      <div class="container-fluid">
        <a atom-logo class="navbar-brand" [routerLink]="['/']"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div atom-navbar class="collapse navbar-collapse" id="navbarNav"></div>
      </div>
    </nav>
  `,
  styles: [],
})
export class OrganismHeaderComponent implements OnInit {

  background: string;

  constructor() {
    this.background = ConfigApp.secondaryColor;
  }

  ngOnInit(): void {
  }

}
