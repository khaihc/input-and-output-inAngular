import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-con-len-cha',
  templateUrl: './child-con-len-cha.component.html',
  styleUrls: ['./child-con-len-cha.component.css'],
})
export class ChildConLenChaComponent implements OnInit {
  count = 8;

  //Cách 1 dùng Emit
  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();
  increment() {
    this.count++;
    this.countChanged.emit(this.count); //Truyền this.count cho component cha nhận được
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

  //Cách 2 dùng Biến cục bộ

  constructor() {}
  ngOnInit(): void {}
}
