
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';

@Component({ 
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
   
   roomDetails:any={}
   isBooked:boolean=false;
  constructor(private tenantservice:TenantService,private route:Router) { }

  ngOnInit(): void { 
    
    this.getViewDetails();
  
  }
  // back(){
  //   this.route.navigate(['/rent-details-list'])
  //   }
    
  getViewDetails(){
        this.tenantservice.getViewDetails().subscribe((res:any) => {
      console.log(res)
      this.roomDetails = res
      this.isBooked = res.booked;
      console.log(res.booked)
      
    },error=> {
      console.log(error)
     
    }, () => {

    })
    


  

  }

book(){
  this.tenantservice.book().subscribe((res:any)=>{
      console.log(res)
      const navigationExtra={
        queryParams:{
          option:'Tenant'
        } 
      }
      
      // this.router.navigate(['/'],navigationExtra)
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate(['rent-details-list'], navigationExtra);
  })
}

}