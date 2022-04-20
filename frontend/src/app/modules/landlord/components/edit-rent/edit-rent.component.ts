import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';


@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styleUrls: ['./edit-rent.component.scss']
})
export class EditRentComponent implements OnInit {

   AddModel:any={}
    constructor(private RentService: RentService) { }
  
    ngOnInit(): void {}
      Editroom(){
        this.RentService.Editroom(this.AddModel).subscribe((res) => {
          console.log(res)
        }, error => {
          console.log(error)
          alert(error)
        }, () => {
    
        })

  
  
      console.log(this.AddModel)
  
      }
  }


