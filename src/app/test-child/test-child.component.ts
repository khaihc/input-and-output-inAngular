import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css'],
})
export class TestChildComponent implements OnInit {
  //Child component -> parent component
  messageChild: string = 'Hello tôi là khai';
  @Output() event = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  funcTest(){
    this.event.emit(this.messageChild);

  }
}
