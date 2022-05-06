
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
    
    // const bookedRoomDetails= JSON.parse(localStorage.getItem('viewRoom') || '{}')
    const {_id:landLordId}= JSON.parse(localStorage.getItem('userId') || '{}')
    // const {landLordId:landLordId} = bookedRoomDetails;
    console.log("########### ",landLordId)

    //return this.http.get(`${this.serverURL}api/landlord/send-notification/6264110cfcd956fb7fdf8159`)
    return this.http.get(`${this.serverURL}api/landlord/send-notification/${landLordId}`)
  }
  //for side navbar
  getProfileDetails(){
    
    const {_id:id}= JSON.parse(localStorage.getItem('userId') || '{}')
    return this.http.get(`${this.serverURL}api/admin/profile-details/${id}`)
  }
//for profile when clicked on i button
  userProfile(id:any){
    
    return this.http.get(`${this.serverURL}api/admin/profile-details/${id}`)
  }
}
