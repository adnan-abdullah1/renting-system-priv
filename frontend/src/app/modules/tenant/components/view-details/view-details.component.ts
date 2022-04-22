import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  ViewModel:any={}
  constructor(private tenantservice:TenantService,private route:Router) { }

  ngOnInit(): void { 
    this.getViewDetails();
  
  }
  back(){
    this.route.navigate(['/rent-details-list'])
    }
    
  getViewDetails(){
    this.tenantservice.getViewDetails(this.ViewModel).subscribe((res) => {
      console.log(res)
      
    }, error => {
      console.log(error)
     
    }, () => {

    })
    


  

  }
}




