import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
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
