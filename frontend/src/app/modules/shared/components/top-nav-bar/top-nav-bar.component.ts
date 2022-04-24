import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../../services/sharedservice.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(private  SharedServiceService: SharedserviceService) { }
  userDetails:any = JSON.parse(localStorage.getItem('userId')|| '{}')
  role=this.userDetails.role
  ngOnInit(): void {
    this.notification()
  }
   
  notification(){
    console.log("...........................................")
    this. SharedServiceService.notification().subscribe((res) => {
      
      console.log(res)
    }, error => {
      console.log(error)
    
    }, () => {

    })
  }
}
