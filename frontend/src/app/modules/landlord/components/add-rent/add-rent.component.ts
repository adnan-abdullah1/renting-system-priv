import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';
 import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.scss']
})
export class AddRentComponent implements OnInit {
 AddModel:any={}
  constructor(private Rentservice : RentService) { }

  ngOnInit(): void {
  }
  Addroom(){
    this.AddModel['landLordId']=localStorage.getItem('userId')
    this.Rentservice.Addroom(this.AddModel).subscribe((res) => {
      Swal.fire('Rent details added successfully')
      console.log(res)
    }, error => {
      console.log(error)
      // alert(error)
    }, () => {

    })
    console.log(this.AddModel)
  

  }
}



