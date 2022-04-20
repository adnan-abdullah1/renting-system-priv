import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  serverURL = environment.serverURL
  constructor(private http: HttpClient) { }
  Addroom(AddModel:any){  
    return this.http.post(`${this.serverURL}api/landlord/add-rent-details`,AddModel)
  }
  Editroom(AddModel:any){
    return this.http.post(`${this.serverURL}api/landlord/edit-rent-details`,AddModel)
  }
  getRentDetails() {
    const userId: any = localStorage.getItem('userId')
    console.log("user id is",userId)
    return this.http.get(`${this.serverURL}api/landlord/get-all-rent-details/${userId}`)
  }
}
