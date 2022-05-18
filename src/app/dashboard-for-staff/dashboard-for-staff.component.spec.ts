import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardForStaffComponent } from './dashboard-for-staff.component';

describe('DashboardForStaffComponent', () => {
  let component: DashboardForStaffComponent;
  let fixture: ComponentFixture<DashboardForStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardForStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardForStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
