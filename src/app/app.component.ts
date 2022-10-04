import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inputAndOuput';

  //Truyền từ cha xuống con
  Counter = 5;
  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }

  //Truyền từ con xuống cha
  countParent: any;
  countChangedHandle(count: number) {
    this.countParent = count;
  }
}
