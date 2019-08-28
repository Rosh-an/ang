import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp3',
  template: `<p>{{"Component 3 value : " + parentData}}</p>`,
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }
  @Input() public parentData;
  ngOnInit() {
  }

}
