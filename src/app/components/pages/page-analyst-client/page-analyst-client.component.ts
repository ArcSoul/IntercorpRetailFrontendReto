import { Component, OnInit } from '@angular/core';
import { ConfigAnalystClient } from '../../../config/ConfigAnalystClient';

@Component({
  selector: 'app-page-analyst-client',
  templateUrl: './page-analyst-client.component.html',
  styles: [
  ]
})
export class PageAnalystClientComponent implements OnInit {

  titleProcess: string;

  constructor() {
    this.titleProcess = ConfigAnalystClient.title;
  }

  ngOnInit(): void {
  }

}
