import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyToAny2Component } from './any-to-any2.component';

describe('AnyToAny2Component', () => {
  let component: AnyToAny2Component;
  let fixture: ComponentFixture<AnyToAny2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyToAny2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyToAny2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
