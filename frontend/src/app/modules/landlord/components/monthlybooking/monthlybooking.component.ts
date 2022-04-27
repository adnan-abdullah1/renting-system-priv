import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { async } from 'rxjs';
import { RentService } from '../../services/rent.service';




@Component({
  selector: 'app-monthlybooking',
  templateUrl: './monthlybooking.component.html',
  styleUrls: ['./monthlybooking.component.scss']
})
export class MonthlybookingComponent implements OnInit {
  
  title='dashboard';
  chart:any=[];
  userData:any=[]
  months:any=['jan','feb','march','april','june','july','aug','sep','oct','nov','dec']
  monthsLabel:any=[] 
   
  bookingFrequency:any=[]
    constructor(private rentservice :RentService) { }

  ngOnInit(): void {
    this.getChart();
   
    



 setTimeout(()=>{
  this.chart=new Chart('canvas',{
    type:'line',
    data:{
      labels:this.monthsLabel,
      datasets:[
        {
          label:"no of bookings",
          data:this.bookingFrequency,
          backgroundColor:'gray',
          borderColor:'green',
          borderWidth:2,
          fill:false,
          
        }
      ]
    },
    options: {
      responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'No of bookings per month'
      }
    },
      scales: {
          y: {
              min: 0,
              max: 10
          }
      }
  }

  })},500)
  }
  
  getChart(){
    this.rentservice.getChart().subscribe((res: any) => {
    
    this.userData=res
    
    this.userData.map((el:any) => {
      this.monthsLabel.push(this.months[el._id])
      this.bookingFrequency.push(el.count)
    })
     
    return this.bookingFrequency
    










    
    })
  }
  
  }

