import { Component } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'shell';
  currentDate = new Date();
  sendData(){
    const event  = new CustomEvent('event', {detail: 'LPL Business User'} );
    dispatchEvent(event);
  }
  
}
