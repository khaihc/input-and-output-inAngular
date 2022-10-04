import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildConLenChaComponent } from './child-con-len-cha.component';

describe('ChildConLenChaComponent', () => {
  let component: ChildConLenChaComponent;
  let fixture: ComponentFixture<ChildConLenChaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildConLenChaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildConLenChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
