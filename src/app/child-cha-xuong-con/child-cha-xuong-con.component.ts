import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-cha-xuong-con',
  templateUrl: './child-cha-xuong-con.component.html',
  styleUrls: ['./child-cha-xuong-con.component.css'],
})
export class ChildChaXuongConComponent implements OnInit {
  @Input() count: number; //Truyền dữ liệu từ cha xuống con
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    //Vòng đời của component
    for (let property in changes) {
      if (property === 'count') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
        console.log('***********------------***********');
      }
    }
  }
}
