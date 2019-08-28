import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `<h1>Comp 1</h1>
  <input #myId type="text">
  <button (click)="initval(myId.value)">Event</button>
  <app-test1 [parentData]="message"></app-test1>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message="";
  constructor() { }

  initval(val){
    this.message=val;
  }
  ngOnInit() {
  }
  

}
