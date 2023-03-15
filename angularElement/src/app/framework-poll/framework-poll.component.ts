import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-framework-poll',
  templateUrl: './framework-poll.component.html',
  styleUrls: ['./framework-poll.component.css']
})
export class FrameworkPollComponent implements OnInit, OnChanges {
  title: any;
  @Input() userDetail: any;


  ngVersion = '6.1.0';
  constructor() { }
  ngOnInit() {
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.title = this.userDetail;
  }

}
