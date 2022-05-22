import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConst } from 'apiconstants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loggedInUser = {}
  constructor(private http: HttpClient) {

  }

  getDepartment() {

    return this.http.get(apiConst.department)
  }

  getUserType() {

    return this.http.get(apiConst.userType)
  }
  saveLoggedInUser(userInfo) {
    this.loggedInUser = userInfo
  }
  getLoggedInUser() {
    return this.loggedInUser;
  }
}
