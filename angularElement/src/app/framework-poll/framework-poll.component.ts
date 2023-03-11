import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework-poll',
  templateUrl: './framework-poll.component.html',
  styleUrls: ['./framework-poll.component.css']
})
export class FrameworkPollComponent implements OnInit {
  @Input() userName: string = '';

  constructor() { }

  ngOnInit() {
  }

}
