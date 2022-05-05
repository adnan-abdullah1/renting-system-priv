import { Component, OnInit, ViewChild ,AfterViewChecked,ElementRef} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';
import {SharedserviceService } from '../../services/sharedservice.service';

import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
//import { ThisReceiver } from '@angular/compiler';
import { DataService } from 'src/app/data.service';

import { ListRentDetailsComponent } from 'src/app/modules/landlord/components/list-rent-details/list-rent-details.component';



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
  RentDetails()
  {
    this.router.navigate(['/rent-details-list'])
 
  }
  


 @ViewChild('sidenav') public sidenav!: MatSidenav;
  
  constructor(private sharedService:SharedserviceService, private sidenavService: SidenavService ,private router: Router,private data:DataService,private _sanitizer: DomSanitizer) {
    

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

  getProfileDetails(){
    this.sharedService.getProfileDetails().subscribe((res:any) => {
      
        res.forEach((obj:any)=>{
          this.firstName=obj.firstName;
          this.lastName=obj.lastName;
          this.profilePicture=this._sanitizer.bypassSecurityTrustResourceUrl(`${obj.profilePicture}`)
          
          console.log("profile pis is ",this.profilePicture)
        })
        
        
        
        
    
  },(error:any)=> {
    console.log(error)
   
  }, () => {

  })

}




 }    
  







