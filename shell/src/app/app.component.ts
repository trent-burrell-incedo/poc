import { Component } from '@angular/core';

declare const require: any;

const customEvent = new CustomEvent('eventFromMfe', { detail: { name: 'Ryan' } })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'shell';
  constructor() {
    window.dispatchEvent(customEvent);
  }
}
