import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ 
  providedIn: 'root'
})
export class AdminService {
  serverURL = environment.serverURL
  constructor(private http:HttpClient) { }
  getLandLords(){ 
    return this.http.get(`${this.serverURL}api/admin/get-landlords`)
  }
  
  
  getTenants(){
    return this.http.get(`${this.serverURL}api/admin/get-tenants`)
  }
  
  
  getTotalOccupiedRooms()
{
    return this.http.get(`${this.serverURL}api/admin/get-occupied-rooms`)
  }

  getTotalAvailableRooms(){
    return this.http.get(`${this.serverURL}api/admin/get-available-rooms`)
  }

  getTenantInfo(){
    return this.http.get(`${this.serverURL}api/admin/tenant-details`)

  }
  getrentlist(){
    return this.http.get(`${this.serverURL}api/admin/rent-info`)
    
  }

  getLandlordlist(){
    return this.http.get(`${this.serverURL}api/admin/get-landlord-details`)

  }

  deleteLandLord(row:any){
    console.log('deletelandlord',row)
    const {_id:landLordId} = row
    return this.http.delete(`${this.serverURL}api/admin/remove-landlord/${landLordId}`)

  }

  // editLandLord(row:any){
  //   const{_id:landLordId} = row
  //   return this.http.put(`${this.serverURL}api/admin/remove-landlord/${landLordId}`,{})
    
  // }

}
