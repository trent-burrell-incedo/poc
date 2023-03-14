import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  title: string;
  constructor() { }
  
  ngOnInit(): void {
    fromEvent(window, 'event').subscribe((event)=>{
      this.title = `Current logged in User is ${event['detail']}`;
    })
  }

}
