import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  @Output () public childEvent= new EventEmitter;
  public display="";
  constructor() { }

  ngOnInit() {
  }

  fireEvent(val){
    this.display= val;

    this.childEvent.emit(this.display); 

  }

}
