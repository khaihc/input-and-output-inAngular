import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child2',
  templateUrl: './test-child2.component.html',
  styleUrls: ['./test-child2.component.css'],
})
export class TestChild2Component implements OnInit {
  @Input() data: string;
  constructor() {}

  ngOnInit(): void {}
}
