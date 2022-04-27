import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RentService } from '../../services/rent.service';




@Component({
  selector: 'app-monthlybooking',
  templateUrl: './monthlybooking.component.html',
  styleUrls: ['./monthlybooking.component.scss']
})
export class MonthlybookingComponent implements OnInit {
  
  title='dashboard';
  chart:any=[];
   userData:any=[3,10,20,15,10,40,50,55,60,70,60]
      constructor(private rentservice :RentService) { }

  ngOnInit(): void {
    this.getChart();
    
  this.chart=new Chart('canvas',{
    type:'line',
    data:{
      labels:['jan','feb','march','april','june','july','aug','sep','oct','nov','dec'],
      datasets:[
        {
          label:'Number of booking in months',
          data:this.userData,
          backgroundColor:'gray',
          borderColor:'green',
          borderWidth:2,
          fill:false,
        }
      ]
    },
    options: {
      scales: {
          y: {
              min: 0,
              max: 100
          }
      }
  }




  })
  
  
 
  }
  getChart(){
    this.rentservice.getChart().subscribe((res: any) => {
      console.log(res)
    //  this.userData=res
     
      
    })
  }
  
  }

