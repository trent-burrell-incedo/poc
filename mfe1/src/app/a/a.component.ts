import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  title: string;
  constructor() { }
  
  ngOnInit(): void {
    fromEvent(window, 'event').subscribe((event)=>{
      this.title = `Current logged in User is ${event['detail']}`;
    })
  }

}
