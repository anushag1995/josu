import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentjobslistComponent } from './studentjobslist.component';

describe('StudentjobslistComponent', () => {
  let component: StudentjobslistComponent;
  let fixture: ComponentFixture<StudentjobslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentjobslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentjobslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
