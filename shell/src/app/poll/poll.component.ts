import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {
  title: string;

  constructor() { }

  ngOnInit(): void {
    if (!document.getElementById('importednative-shim')) {
      this.importJS('native-shim');
      this.importJS('framework-poll');
    }
    fromEvent(window, 'event').subscribe((event)=>{
      this.title = `Current logged in User is ${event['detail']}`;
      // const myAngularElement = document.createElement('app-framework-poll');
      //  myAngularElement['userDetail'] = 'John';
      //  document.getElementById('my-container').appendChild(myAngularElement);
    })
  }

 
  ngOnDestroy(): void {
    this.remoteJS('native-shim');
    this.remoteJS('framework-poll');
  }

  importJS(name) {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.id = 'imported' + name;
    script.src = 'assets/js/' + name + '.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  remoteJS(name) {
    document.getElementById('imported' + name).remove();
  }

}
