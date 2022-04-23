import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RentService } from '../../services/rent.service';
// import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styleUrls: ['./edit-rent.component.scss']
})
export class EditRentComponent implements OnInit {

  param:any=""
   userDetails:any={}
   editRoomDetails:any = JSON.parse( localStorage.getItem('editRoom') || '{}')
    
   
   
    constructor(private route:Router, private RentService: RentService,private router:ActivatedRoute) { 
      this.router.queryParams.subscribe((params=>{
        this.param = params['option'];
      }))
    }
  
   
    ngOnInit(): void {  }
      Editroom(){
        
        this.RentService.Editroom(this.editRoomDetails).subscribe((res) => {
          
          console.log(res)
           this.userDetails = JSON.parse(localStorage.getItem('userId') || '{}')

           if(this.userDetails?.role=='Tenant')
    {
      const navigationExtra={
        queryParams:{
          option:'Tenant'
          
          
        } 
      
      }
      
      this.route.navigate(['/rent-details-list'],navigationExtra)
      
    }
    if(this.userDetails?.role=='landlord')
    {
      {
        const navigationExtra={
          queryParams:{
            option:'landlord'
          
          }
        }
        
        
        this.route.navigate(['/rent-details-list'],navigationExtra)
        
      }
    }
           

          
        }, error => {
          console.log(error)
          // alert(error)
        }, () => {
    
        })

  
  
      console.log(this.editRoomDetails)
  
      }
  }


