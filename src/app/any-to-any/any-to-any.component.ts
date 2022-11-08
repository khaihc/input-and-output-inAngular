import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-any-to-any',
  templateUrl: './any-to-any.component.html',
  styleUrls: ['./any-to-any.component.css'],
})
export class AnyToAnyComponent implements OnInit {
  messageAnyToAnyComponent = 'Hey! I am child 1';
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.setMessage(this.messageAnyToAnyComponent);
  }
}
