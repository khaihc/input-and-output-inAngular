import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-any-to-any2',
  templateUrl: './any-to-any2.component.html',
  styleUrls: ['./any-to-any2.component.css']
})
export class AnyToAny2Component implements OnInit {
  messageAnyToAny2Component:string;

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.messageAnyToAny2Component = this.shared.getMessage();
  }

}
