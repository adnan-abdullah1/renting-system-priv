import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TenantService {
  serverURL = environment.serverURL
   isBooked:boolean =false;
  constructor(private http: HttpClient) { }
  getViewDetails(){

    const roomDetails = JSON.parse(localStorage.getItem('viewRoom') || '{}')
     this.isBooked= roomDetails.booked;
    const {_id:roomId} = roomDetails;
    // return this.http.put(${this.serverURL}api/landlord/edit-rent-details/${userId},editRoomDetails)
    return this.http.get(`${this.serverURL}api/tenant/view-room-details/${roomId}`)
  }

  book(){
    const bookedRoomDetails= JSON.parse(localStorage.getItem('viewRoom') || '{}')
     const {_id:roomId} = bookedRoomDetails;
     const {_id:tenantId} = JSON.parse(localStorage.getItem('userId') || '{}')
     bookedRoomDetails.tenantId = tenantId; 
     console.log('booked details--->',bookedRoomDetails)

    return this.http.post(`${this.serverURL}api/tenant/post-tenant-booking-details/${roomId}`,bookedRoomDetails)
  }
}