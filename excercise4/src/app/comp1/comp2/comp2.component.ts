import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  public text="";
  @Output () public childEvent= new EventEmitter();
  constructor() { }
 
  fireEvent(val){
    this.text=val;
    this.childEvent.emit(this.text);  }
  ngOnInit() {
  }

}
