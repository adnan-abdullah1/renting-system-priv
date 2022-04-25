
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
   userDetails:any={}
  isApproved:any={}
   constructor(private tenantservice:TenantService,private route:Router) { }

  ngOnInit(): void { 
    
    this.getViewDetails();
    this.bookingDetails();
  
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


  bookingDetails(){
    this.tenantservice.bookingDetails().subscribe((res:any)=>{
    
      this.isApproved = res.approvalStatus
    
    })
  }

  applyBooking(){
    console.log('booking')
  }

// book(){
//   this.tenantservice.book().subscribe((res:any)=>{
//       console.log(res)

//       this.userDetails= JSON.parse(localStorage.getItem('userId') || '{}')

//       if(this.userDetails?.role=='Tenant')
//       {
//         const navigationExtra={
//           queryParams:{
//             option:'Tenant'
            
            
//           } 
        
//         }
        
//         this.route.navigate(['/rent-details-list'],navigationExtra)
        
//       }
//       if(this.userDetails?.role=='landlord')
//       {
//         {
//           const navigationExtra={
//             queryParams:{
//               option:'landlord'
            
//             }
//           }
          
          
//           this.route.navigate(['/rent-details-list'],navigationExtra)
          
//         }
//       }
  



//   })
// }

// checkOut(){
//   this.tenantservice.checkOut().subscribe((res:any)=>{
//     console.log(res)
 
//     this.userDetails= JSON.parse(localStorage.getItem('userId') || '{}')

//     if(this.userDetails?.role=='Tenant')
//     {
//       const navigationExtra={
//         queryParams:{
//           option:'Tenant'
          
          
//         } 
      
//       }
      
//       this.route.navigate(['/rent-details-list'],navigationExtra)
      
//     }
//     if(this.userDetails?.role=='landlord')
//     {
//       {
//         const navigationExtra={
//           queryParams:{
//             option:'landlord'
          
//           }
//         }
        
        
//         this.route.navigate(['/rent-details-list'],navigationExtra)
        
//       }
//     }

//   })
// }

}