import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';
 import Swal from 'sweetalert2'

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.scss']
})
export class AddRentComponent implements OnInit {
 AddModel:any={}
 user:any={}
  constructor(private Rentservice : RentService,
    private route: Router, 
//private rentService: RentService,
    ) { }

  ngOnInit(): void {
  }
  Addroom(){
    
    this.user = JSON.parse( localStorage.getItem('userId')||'{}') 
    this.AddModel['landLordId']=  this.user._id 
  
    this.Rentservice.Addroom(this.AddModel).subscribe((res) => {
      Swal.fire('Rent details added successfully')
      console.log(res)
    }, error => {
      console.log(error)
    
    }, () => {

    })
    console.log(this.AddModel)
    const navigationExtra={
      queryParams:{
        option:'landlord'
      } 
    }
    
    // this.router.navigate(['/'],navigationExtra)
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['rent-details-list'], navigationExtra);
    

  }
}



