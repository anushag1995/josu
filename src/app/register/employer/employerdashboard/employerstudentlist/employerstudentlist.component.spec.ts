import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerstudentlistComponent } from './employerstudentlist.component';

describe('EmployerstudentlistComponent', () => {
  let component: EmployerstudentlistComponent;
  let fixture: ComponentFixture<EmployerstudentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerstudentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerstudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
