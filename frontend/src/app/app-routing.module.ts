import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AddRentComponent } from './modules/landlord/components/add-rent/add-rent.component';
import { EditRentComponent } from './modules/landlord/components/edit-rent/edit-rent.component';
import { ListRentDetailsComponent } from './modules/landlord/components/list-rent-details/list-rent-details.component';
import { ViewDetailsComponent } from './modules/tenant/components/view-details/view-details.component';
import { NotificationdetailsComponent } from './modules/landlord/components/notificationdetails/notificationdetails.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'rent-details-list',component:ListRentDetailsComponent},
  {path:'addrent',component:AddRentComponent},
  {path:'editrent',component:EditRentComponent},
  {path:'viewdetails',component:ViewDetailsComponent},
  {path:'notification-dialog',component:NotificationdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
