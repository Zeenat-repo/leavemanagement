import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  selectedTab: any = 'dashboard';

  constructor() { }

  ngOnInit(): void {

  }
  goToPage(paramText: string) {
    this.selectedTab = paramText;

  }

}
