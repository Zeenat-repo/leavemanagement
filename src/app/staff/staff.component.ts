import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  selectedTab: any = 'dashboard';

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }
  goToPage(paramText: string) {
    this.selectedTab = paramText

  }
  ngAfterContentChecked() {


    this.cdref.detectChanges();

  }


}
