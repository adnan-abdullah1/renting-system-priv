import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent implements OnInit {
  userModel:any={}
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  addTenant(){
    this.adminService.addTenant(this.userModel).subscribe((res:any)=>{
      console.log('response add tenent',res)
    })
  }
}
