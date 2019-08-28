import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Output () public childEvent1= new EventEmitter;
  
  
  constructor() { }

  ngOnInit() {
  }

  fireEvent1(val){
    this.childEvent1.emit(val); 
  }

}
