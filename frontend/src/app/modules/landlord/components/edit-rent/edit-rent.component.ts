import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from '../../services/rent.service';


@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styleUrls: ['./edit-rent.component.scss']
})
export class EditRentComponent implements OnInit {

  
   editRoomDetails:any = JSON.parse( localStorage.getItem('editRoom') || '{}')
    
   
   
    constructor(private route:Router, private RentService: RentService) { }
  
   
    ngOnInit(): void {  }
      Editroom(){
        
        this.RentService.Editroom(this.editRoomDetails).subscribe((res) => {
          
          console.log(res)
          this.route.navigate(['/rent-details-list']);
        }, error => {
          console.log(error)
          // alert(error)
        }, () => {
    
        })

  
  
      console.log(this.editRoomDetails)
  
      }
  }


