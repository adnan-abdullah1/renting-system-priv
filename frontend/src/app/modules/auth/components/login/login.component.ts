import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authModel: any = {};
  userDetails:any={}

  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit(): void {
  }
    login() {
      this.authService.login(this.authModel).subscribe((res:any) => {
      console.log(res)
      this.userDetails=res.user
      localStorage.setItem('userId',this.userDetails._id)
     if(this.userDetails?.role == 'admin')
    {
    this.router.navigate(['/admin'])
    }
    if(this.userDetails?.role=='tenant')
    {
    this.router.navigate(['/tenant'])
    }
    if(this.userDetails?.role=='landlord')
    {
    this.router.navigate(['/rent-details-list'])
    }
    })
  }
}
  // constructor(private authService: AuthService,private) { }

  // ngOnInit(): void {
  // }
  // login() {
  //   this.authService.login(this.authModel).subscribe((res) => {
  //     console.log(res)
  //   }, error => {
  //     console.log(error.error.message)
  //     alert(error)
  //   }, () => {

  //   })
    

  //    // console.log("this.authModel", this.authModel);
  //     //  console.log(this.role);
  //     if (this.authModel.email == "admin@gmail.com" && this.authModel.password == '12345' && this.authModel.role=="Admin") {
  //       alert("success")
  //     } else {
  //       alert("invalid")
  //     }
  //   }
  // }
  

