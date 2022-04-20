import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { RentService } from '../../services/rent.service';
export interface listrent {

  streetname: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  roomtype: string;
  action: string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-list-rent-details',
  templateUrl: './list-rent-details.component.html',
  styleUrls: ['./list-rent-details.component.scss']
})


export class ListRentDetailsComponent implements OnInit {
  constructor(private route: Router, private rentService: RentService) { }

  ngOnInit(): void {
    this.getRentDetails();
  }

  add_room() {
    this.route.navigate(['/addrent']);
  }
  displayedColumns: string[] = ['streetname', 'city', 'district', 'state', 'pincode', 'roomtype', 'action'];
   dataSource = ELEMENT_DATA;
  getRentDetails() {
    //call to backend
    this.rentService.getRentDetails().subscribe((res: any) => {
      
      this.dataSource = res.data;
    })

  }
}
