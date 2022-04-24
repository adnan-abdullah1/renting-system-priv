
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class SharedserviceService {
  serverURL = environment.serverURL


  constructor(private http: HttpClient) { }
  notification(){  
    
    const bookedRoomDetails= JSON.parse(localStorage.getItem('viewRoom') || '{}')
    const {_id:landLordId} = bookedRoomDetails;
    return this.http.get(`${this.serverURL}api/tenant/view-room-details/${landLordId}`)
  }
 
  
  
}
