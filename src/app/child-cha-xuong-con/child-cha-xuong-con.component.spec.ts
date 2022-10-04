import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChaXuongConComponent } from './child-cha-xuong-con.component';

describe('ChildChaXuongConComponent', () => {
  let component: ChildChaXuongConComponent;
  let fixture: ComponentFixture<ChildChaXuongConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildChaXuongConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildChaXuongConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
