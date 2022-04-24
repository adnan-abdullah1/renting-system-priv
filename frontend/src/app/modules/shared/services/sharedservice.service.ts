
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
    const {landLordId:landLordId} = bookedRoomDetails;
    console.log("########### ",landLordId)

    //return this.http.get(`${this.serverURL}api/landlord/send-notification/6264110cfcd956fb7fdf8159`)
    return this.http.get(`${this.serverURL}api/landlord/send-notification/${landLordId}`)
  }
 
  
  
}
