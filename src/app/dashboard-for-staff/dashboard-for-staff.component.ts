import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-for-staff',
  templateUrl: './dashboard-for-staff.component.html',
  styleUrls: ['./dashboard-for-staff.component.scss']
})
export class DashboardForStaffComponent implements OnInit {
  selectedTab:any = 'dashboard' ;
  constructor() { }

  ngOnInit(): void {
  }

  goToPage(paramText:string){
    this.selectedTab = paramText

  }

}
