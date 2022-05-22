import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConst } from 'apiconstants';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) {


  }
  getAllLeave() {
    let url = apiConst.appliedLeave
    return this.http.get(url);
  }
}
