import { Component, OnInit } from '@angular/core';
import { ConfigMenu, MenuModel } from '../../config/ConfigMenu';

@Component({
  selector: 'app-atom-navbar, div[atom-navbar]',
  template: `
    <ul class="navbar-nav">
      <li class="nav-item" *ngFor="let menu of menuList">
        <a class="nav-link" routerLinkActive="active" aria-current="page" [routerLink]="[menu.url]">
          <i class="fas" [ngClass]="menu.icon"></i> {{menu.title}}
        </a>
      </li>
    </ul>
  `,
  styles: [],
})
export class AtomNavbarComponent implements OnInit {

  menuList: MenuModel[];

  constructor() {
    this.menuList = ConfigMenu;
  }

  ngOnInit(): void {
  }

}
