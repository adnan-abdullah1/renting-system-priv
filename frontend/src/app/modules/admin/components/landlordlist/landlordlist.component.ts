import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

export interface listrent {

  landlordName: string;
  address: string;
  phoneNo: string;
  email: string;
  totalRooms: string;
  occupied: string;
  available: string;
  action:string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-landlordlist',
  templateUrl: './landlordlist.component.html',
  styleUrls: ['./landlordlist.component.scss']
})
export class LandlordlistComponent implements OnInit {

  constructor(private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
    
    
    this.getLandlordlist();
    
  }
  addLandlord(){
   this.route.navigate(['/register']);   
  }
  displayedColumns:String[]=['landlordName','address', 'phoneNo','email','totalRooms','occupied','available','action']
  dataSource=ELEMENT_DATA;
  getLandlordlist(){
    this.adminService.getLandlordlist().subscribe((res: any) => {
      console.log('landlordinfo',res)
  
      this.dataSource = res;
  })
  
}

deleteLandLord(row:any){
  this.adminService.deleteLandLord(row).subscribe((res:any)=>{
    console.log(res)

    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/admindashboard'])

    
  })
}

}