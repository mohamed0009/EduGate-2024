import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultStudentsComponent } from './consult-students.component';

describe('ConsultStudentsComponent', () => {
  let component: ConsultStudentsComponent;
  let fixture: ComponentFixture<ConsultStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
