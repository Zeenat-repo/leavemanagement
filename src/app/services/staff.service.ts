import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConst } from '../../../apiconstants';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) {


  }
  getStaffMembers() {
    let url = apiConst.staffMembers
    return this.http.get(url);
  }
}
