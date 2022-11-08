import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyToAnyComponent } from './any-to-any.component';

describe('AnyToAnyComponent', () => {
  let component: AnyToAnyComponent;
  let fixture: ComponentFixture<AnyToAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyToAnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyToAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
