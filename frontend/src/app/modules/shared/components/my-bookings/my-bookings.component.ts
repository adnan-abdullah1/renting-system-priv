import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../../services/sharedservice.service';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  myBookings:any={}
  constructor(private sharedService:SharedserviceService) { }

  ngOnInit(): void {
    this.getMyBookings()
  }
  getMyBookings(){
    this.sharedService.getMyBookings().subscribe((res: any) => {
      console.log('bookings info',res)
      this.myBookings=res //returns array of objects
     
     
  })
  }
}
