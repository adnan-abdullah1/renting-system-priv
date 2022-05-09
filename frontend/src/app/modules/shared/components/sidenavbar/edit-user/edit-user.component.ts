import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedserviceService } from '../../../services/sharedservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private sharedService:SharedserviceService) { }
  editUser:any=this.data
  ngOnInit(): void {
    console.log('edit user',this.data)
  }

  editUserDetails(){
     this.sharedService.editUserDetails(this.editUser).subscribe((res:any)=>{
        this.editUser = res
     })
  }


}
