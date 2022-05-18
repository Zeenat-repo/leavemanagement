import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardForStaffComponent } from './dashboard-for-staff/dashboard-for-staff.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signUp',
    component :SignUpComponent
  },

  {
    path:'dashboard',
    component:EmployeeDashboardComponent
  },
  {
    path:'dashboardHod',
    component :SidebarMenuComponent
  },
  {
    path:'dashboardStaff',
    component : DashboardForStaffComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
