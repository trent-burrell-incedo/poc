import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    if (!document.getElementById('importednative-shim')) {
      this.importJS('native-shim');
      this.importJS('framework-poll');
    }
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