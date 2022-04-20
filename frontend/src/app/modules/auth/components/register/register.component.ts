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
      let user = this.authService.register(this.UserModel).subscribe((res) => {
        if(user){
         Swal.fire('SUCESS');
    
        this.router.navigate(['/login'])
        }
        else
        {
       Swal.fire('error');
       
     }
     console.log('heloo',res)
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
