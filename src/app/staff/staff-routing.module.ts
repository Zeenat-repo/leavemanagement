import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardForStaffComponent } from '../dashboard-for-staff/dashboard-for-staff.component';
import { EmployeeDashboardComponent } from '../employee-dashboard/employee-dashboard.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent },
  {
    path: 'dashboard',
    component: EmployeeDashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
