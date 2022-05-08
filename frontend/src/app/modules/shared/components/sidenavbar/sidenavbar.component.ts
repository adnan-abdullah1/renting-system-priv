import { Component, OnInit, ViewChild } from '@angular/core';
// ,AfterViewChecked,ElementRef
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

//import { ThisReceiver } from '@angular/compiler';
import { DataService } from 'src/app/data.service';
import { ListRentDetailsComponent } from 'src/app/modules/landlord/components/list-rent-details/list-rent-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import {SharedserviceService } from '../../services/sharedservice.service';


import { ChangePasswordComponent } from './change-password/change-password.component';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  userDetails:any={};
  profilePicture:any;
firstName:any;
lastName:any;
 
 //query param passed in order avoid two nav bars in admin dashboard
  navigationExtra={
  queryParams:{
    option:'ture'
  } 
}

 @ViewChild('sidenav') public sidenav!: MatSidenav;
  
  constructor(private sidenavService: SidenavService ,private router: Router,private data:DataService,public dialog:MatDialog,
    private sharedService:SharedserviceService,private _sanitizer: DomSanitizer) {
  }

  RentDetails()
  //navigation extra passed bkz other wise navbar was comming twice in admin dashboard
  {
    this.router.navigate(['/rentlist'],this.navigationExtra)
  }
  listLandlord(){ 
     //navigation extra passed bkz other wise navbar was comming twice in admin dashboard
    this.router.navigate(['/landlordlist'],this.navigationExtra)
  }
  
  ngOnInit():void 
  {
    
    this.getProfileDetails()
  }  
    
  
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    

  
  }
  ngAfterViewChecked():void
  {
    this.userDetails=(this.data.getUserData());
    {
    console.log(this.userDetails);
    }
  }

  changePasswordDialog(){
        this.dialog.open(ChangePasswordComponent)
  }

  getProfileDetails(){
    this.sharedService.getProfileDetails().subscribe((res:any) => {
      console.log('response of profile',res)
        res.forEach((obj:any)=>{
          this.firstName=obj.firstName;
          this.lastName=obj.lastName;
         
          if(obj.profilePicture)
          this.profilePicture=this._sanitizer.bypassSecurityTrustResourceUrl(`${obj.profilePicture}`)
          else
          this.profilePicture='assets/profile.jpg' 
        })
        
        
        
        
    
  },(error:any)=> {
    console.log(error)
   
  }, () => {

  })

}
  

}






