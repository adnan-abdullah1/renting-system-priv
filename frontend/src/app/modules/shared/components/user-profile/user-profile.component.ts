import {Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {SharedserviceService} from '../../services/sharedservice.service'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  firstName:any;
  lastName:any;
  profilePicture:any;
  contact:any;
  email:any;
  role:any;
  address:any;
  id:any;
  param:any //will recive wheather landlord or tenant or admin from admin dashboard
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private sharedService:SharedserviceService,private route:Router,
 private _sanitizer: DomSanitizer) {}
   
  userProfileData:any=this.data
  ngOnInit(): void {
    console.log("]]]]] ",this.userProfileData)
   
     if(this.userProfileData.user=="landlord")
     this.id=this.userProfileData._id
     else
     this.id=this.userProfileData.tenantId._id
    this.userProfile()
  }
  userProfile(){
    
    this.sharedService.userProfile(this.id).subscribe((res:any)=>{
      console.log("[[[[ ",res)
      res.forEach((obj:any)=>{
        console.log("obj is ",obj)
        this.firstName=obj.firstName;
        this.lastName=obj.lastName;
        this.role=obj.role;
        this.contact=obj.contact;
        this.email=obj.email
        this.address=obj.address
        this.profilePicture=this._sanitizer.bypassSecurityTrustResourceUrl(`${obj.profilePicture}`)
        
       
      })
    })
  }
}
