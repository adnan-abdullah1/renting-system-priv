import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-edit-all-tenants',
  templateUrl: './edit-all-tenants.component.html',
  styleUrls: ['./edit-all-tenants.component.scss']
})
export class EditAllTenantsComponent implements OnInit {
  tenantDetails:any= this.data
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
    console.log(this.data)

  }

  editAllTenants(){
    this.adminService.editAllTenants(this.tenantDetails).subscribe((res:any)=>{
        console.log(res)
    })
  }

}
