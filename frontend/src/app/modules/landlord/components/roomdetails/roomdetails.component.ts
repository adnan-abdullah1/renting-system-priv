import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from '../../services/rent.service';

export interface listrent {

  tName: string;
  
  roomNo: string;
  status: string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.scss']
})
export class RoomdetailsComponent implements OnInit {

  constructor(private route: Router, private rentService: RentService) { }

  ngOnInit(): void {
    this.getroomdetails()
  }

  displayedColumns: string[] = ['tName', 'roomNo', 'status'];
   dataSource = ELEMENT_DATA;
  getroomdetails() {
    //call to backend
    this.rentService.getRentDetails().subscribe((res: any) => {
      console.log(res)
      this.dataSource = res;
      
    })
  }
  

}
