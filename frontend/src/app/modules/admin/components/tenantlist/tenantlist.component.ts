import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
export interface listrent {

  Name: string;
  LandLordId:Number,
  address: string;
  phoneNo: string;
  email: string;
  roomNo:number;
  action:string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-tenantlist',
  templateUrl: './tenantlist.component.html',
  styleUrls: ['./tenantlist.component.scss']
})
export class TenantlistComponent implements OnInit {

  constructor(private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
    this.getTenantInfo();
  }

  addTenant(){
    this.route.navigate(['/register']);   
   }

  displayedColumns:String[]=['Name','LandLordId','address','phoneNo','email','roomNo','action']
  dataSource=ELEMENT_DATA;
  getTenantInfo(){
    this.adminService.getTenantInfo().subscribe((res: any) => {
      console.log('tenantinfo',res)
  
      this.dataSource = res;
  })

}
}