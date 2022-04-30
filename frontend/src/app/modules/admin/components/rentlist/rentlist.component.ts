import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

export interface listrent {

  phoneNo: Number;
  landlordName: string;
  location: string;
  roomType: string;
  action:string;

}

 const ELEMENT_DATA: listrent[] = [];


@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.scss']
})
export class RentlistComponent implements OnInit {

  constructor(private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
    this.getrentlist();
  }
  displayedColumns:String[]=['landlordName','location','roomType','phoneNo','action']
  dataSource=ELEMENT_DATA;

  getrentlist(){
    this.adminService.getrentlist().subscribe((res: any) => {
      console.log('rentinfo',res)
  
      this.dataSource = res;
  })
}

}
