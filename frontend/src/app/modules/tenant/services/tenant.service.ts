import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TenantService {
  serverURL = environment.serverURL
  constructor(private http: HttpClient) { }
  getViewDetails(){

    const roomDetails = JSON.parse(localStorage.getItem('viewRoom') || '{}')
    const {_id:roomId} = roomDetails;
    // return this.http.put(${this.serverURL}api/landlord/edit-rent-details/${userId},editRoomDetails)
    return this.http.get(`${this.serverURL}api/tenant/view-room-details/${roomId}`)
  }
}