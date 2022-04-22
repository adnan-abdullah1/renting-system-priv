import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  UserModel:any={}
  constructor(private authService: AuthService,private router: Router) { }
  ngOnInit(): void {}
    register(){
      this.authService.register(this.UserModel).subscribe((res) => {
         Swal.fire('Registered successfully');
        this.router.navigate(['/login'])
      
       
     },error=>{
          Swal.fire('error');
          console.log(error)
     },()=>{
          
     })
    
    }
}
// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   UserModel: any = {}

//   constructor(private authService:AuthService) { }

//   ngOnInit(): void {
//   }

//   register() {
//     this.authService.register(this.UserModel).subscribe((res) => {
//       console.log(res)
//     }, error => {
//       console.log(error)
//       alert(error)
//     }, () => {

//     })

// }
// }
