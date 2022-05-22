import { Component, OnInit } from '@angular/core';

import { StaffService } from 'src/app/services/staff.service';
import { Observable, of } from 'rxjs';
import { IDatasource, IGetRowsParams, GridOptions, GridApi, ColDef } from 'ag-grid-community';
import { ButtonRendererComponent } from '../../button-renderer.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewStaffComponent } from '../view-staff/view-staff.component';
@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent implements OnInit {
  // gridApi: GridApi;
  frameworkComponents: any;
  api: any;
  constructor(private staffService: StaffService,
    public dialog: MatDialog

  ) {

    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20,
    paginationPageSize: 5,
    infiniteInitialRowCount: 2,

  }
  gridApi: GridApi;




  remoteGridBinding = this;

  rowData: any = [];
  columnDefs: ColDef[] = [
    {
      headerName: 'Full Name',
      field: 'fullName',
      sortable: true,
      filter: "agTextColumnFilter"
    },
    {
      headerName: 'UserName',
      field: 'userName',
      sortable: true,
      filter: "agNumberColumnFilter",

    },
    {
      headerName: 'Email Id',
      field: 'email',
      sortable: true,
      filter: "agNumberColumnFilter",

    },
    {
      headerName: 'Mobile',
      field: 'mobile',
      sortable: true,
      filter: "agNumberColumnFilter",

    },
    // {
    //   headerName: 'Edit',
    //   width: 100,
    //   cellRenderer: 'buttonRenderer',
    //   cellRendererParams: {
    //     onClick: this.onEditButtonClick.bind(this),
    //     label: 'Edit'
    //   },
    // },
    {
      headerName: 'View',
      cellRenderer: 'buttonRenderer',
      width: 100,
      cellRendererParams: {
        onClick: this.onViewButtonClick.bind(this),
        label: 'View'
      },
    },
  ];

  // rowData = [
  //   // { make: 'Toyota', model: 'Celica', price: 35000 },
  //   // { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   // { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];
  ngOnInit(): void {
    this.loadData();

    // this.gridApi.setRowData(this.rowData);
  }
  viewData() {
    console.log("called me:")
  }
  loadData() {
    this.staffService.getStaffMembers().subscribe(result => {
      this.rowData = result;
      this.rowData.forEach(element => {
        element.action = "<a href='' (click)='viewData()'>View</a>"
      });
    });
  }





  onGridReady(params: any) {
    this.gridApi = params.api;
    this.loadData()
  }

  getData(params: any): Observable<{ data: any; totalRecords: any }> {
    return of({ data: this.rowData, totalRecords: 85 });
  }

  onEditButtonClick(params) {
    console.log("editi:", params.data)

    const dialogRef = this.dialog.open(ViewStaffComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onViewButtonClick(params) {
    console.log("view:", params.data)
    const dialogRef = this.dialog.open(ViewStaffComponent, { data: params.data, width: '50%', });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  onRowEditingStopped(params) {
    debugger;
  }












}
