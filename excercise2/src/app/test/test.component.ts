import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<input [(ngModel)]="name1" type="text">
  {{name1}}`,
  styles: []
})
export class TestComponent implements OnInit {

  public name1="";
  constructor() { }

  ngOnInit() {
  }

}
