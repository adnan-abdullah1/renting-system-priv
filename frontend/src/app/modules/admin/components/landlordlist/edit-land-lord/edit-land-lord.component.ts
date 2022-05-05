import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-edit-land-lord',
  templateUrl: './edit-land-lord.component.html',
  styleUrls: ['./edit-land-lord.component.scss']
})
export class EditLandLordComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private adminService:AdminService,private route:Router) { }
editUserModel:any=this.data
  ngOnInit(): void {
    console.log(this.data)
    console.log('editUserModel',this.editUserModel)
  }
 
 
  editLandLord(){
      this.adminService.editLandLord(this.editUserModel).subscribe((res:any)=>{
        console.log(res)
      })
}


}
