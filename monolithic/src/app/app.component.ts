import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const require: any;

@Component({
  selector: 'login-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  } 
}
