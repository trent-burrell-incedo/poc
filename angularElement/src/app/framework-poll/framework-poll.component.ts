import { Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-framework-poll',
  templateUrl: './framework-poll.component.html',
  styleUrls: ['./framework-poll.component.css']
})
export class FrameworkPollComponent implements OnInit {
  title: any;
  // @Input() userDetail:any;

  constructor() { }
  ngOnInit() {
    // this.title = this.userDetail;

    fromEvent(window, 'event').subscribe((event)=>{
      this.title = `Current logged in User is ${event['detail']}`;
      // const myAngularElement = document.createElement('app-framework-poll');
      //  myAngularElement['userDetail'] = 'John';
      //  document.getElementById('my-container').appendChild(myAngularElement);
    })
  }

}
