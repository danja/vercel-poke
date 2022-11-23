import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<div>Hello {{value}}</div>`,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  value = 'World';

  constructor() { }

  ngOnInit(): void {
  }

}
