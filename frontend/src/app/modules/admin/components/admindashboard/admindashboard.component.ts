import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
 landLordList:any={}
 tenantList:any={}
 totalOccipiedRooms:any={}
 totalAvailableRooms:any={}
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getLandLords()
    this.getTenants()
    this.getTotalOccupiedRooms()
    this.getTotalAvailableRooms()
  }

  getLandLords(){

    this.adminService.getLandLords().subscribe((res:any)=>{
      console.log('res----',res) 
      this.landLordList= Object.keys(res).length
      console.log(this.landLordList)
    })
    
  }

  getTenants(){
    this.adminService.getTenants().subscribe((res:any)=>{
      this.tenantList = Object.keys(res).length
    })
  }

  getTotalOccupiedRooms()
  {
    this.adminService.getTotalOccupiedRooms().subscribe((res:any)=>{
        this.totalOccipiedRooms= Object.keys(res).length
    })
  }

  getTotalAvailableRooms(){
    this.adminService.getTotalAvailableRooms().subscribe((res:any)=>{
      this.totalAvailableRooms= res
    })
  }

}
