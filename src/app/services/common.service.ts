import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConst } from 'apiconstants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {

  }

  getDepartment() {

    return this.http.get(apiConst.department)
  }

  getUserType() {

    return this.http.get(apiConst.userType)
  }
}
