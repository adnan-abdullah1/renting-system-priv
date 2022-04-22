import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TenantService {
  serverURL = environment.serverURL
  constructor(private http: HttpClient) { }
  getViewDetails(ViewModel:any){
    return this.http.get(`${this.serverURL}string`,ViewModel)
  }
}
