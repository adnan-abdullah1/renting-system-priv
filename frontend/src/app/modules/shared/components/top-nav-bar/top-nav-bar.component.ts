import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(private  SharedServiceService: SharedserviceService,private router:Router) { }
  userDetails:any = JSON.parse(localStorage.getItem('userId')|| '{}')
  role=this.userDetails.role
  notificationCount:any={}
  notify:any=[]
  ngOnInit(): void { 


    this.notification()
  }
   
  notification(){
    this. SharedServiceService.notification().subscribe((res) => {
      
      console.log('notification',res)
      this.notify=res
      // console.log('notify',this.notify[0].notification)
     this.notificationCount=Object.keys(res).length
    }, error => {
      console.log(error)
    
    }, () => {

    })
  }
  getDropDown(value:any){
    console.log(value)
    localStorage.setItem('bookingInfo',JSON.stringify(value))
    this.router.navigate(['/notification-dialog'])
    // console.log('abc')
  }
}
