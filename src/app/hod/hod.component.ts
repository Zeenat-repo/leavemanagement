import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.scss']
})
export class HodComponent implements OnInit {

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
