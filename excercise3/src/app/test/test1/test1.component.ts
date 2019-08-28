import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<p>{{"Comp 2 value :" + parentData}}</p>`,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }
  @Input() public parentData;
  ngOnInit() {
  }

}

