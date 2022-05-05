import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListRentDetailsComponent } from './modules/landlord/components/list-rent-details/list-rent-details.component';
import {MatTableModule} from '@angular/material/table';
import { AddRentComponent } from './modules/landlord/components/add-rent/add-rent.component';
import { EditRentComponent } from './modules/landlord/components/edit-rent/edit-rent.component';
import{MatIconModule} from '@angular/material/icon';
import { TopNavBarComponent } from './modules/shared/components/top-nav-bar/top-nav-bar.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { ViewDetailsComponent } from './modules/tenant/components/view-details/view-details.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationdetailsComponent } from './modules/landlord/components/notificationdetails/notificationdetails.component';
import { AllotmentdetailsComponent } from './modules/landlord/components/allotmentdetails/allotmentdetails.component';
import { DashboardComponent } from './modules/landlord/components/dashboard/dashboard.component';
import { MonthlybookingComponent } from './modules/landlord/components/monthlybooking/monthlybooking.component';
import { RoomdetailsComponent } from './modules/landlord/components/roomdetails/roomdetails.component';
import { SidenavbarComponent } from './modules/shared/components/sidenavbar/sidenavbar.component';
import { NgChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
import { LandlordlistComponent } from './modules/admin/components/landlordlist/landlordlist.component';
import { RentlistComponent } from './modules/admin/components/rentlist/rentlist.component';
import { TenantlistComponent } from './modules/admin/components/tenantlist/tenantlist.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddLandLordComponent } from './modules/admin/components/landlordlist/add-land-lord/add-land-lord.component';
import { EditLandLordComponent } from './modules/admin/components/landlordlist/edit-land-lord/edit-land-lord.component';
import { EditTenantComponent } from './modules/admin/components/tenantlist/edit-tenant/edit-tenant.component';
import { AddTenantComponent } from './modules/admin/components/tenantlist/add-tenant/add-tenant.component';
import { RentlistdetailsComponent } from './modules/admin/components/rentlist/rentlistdetails/rentlistdetails.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListRentDetailsComponent,
    AddRentComponent,
    EditRentComponent,
    TopNavBarComponent,
    ViewDetailsComponent,
    NotificationdetailsComponent,
    AllotmentdetailsComponent,
    DashboardComponent,
    MonthlybookingComponent,
    RoomdetailsComponent,
    SidenavbarComponent,
    AdmindashboardComponent,
    LandlordlistComponent,
    RentlistComponent,
    TenantlistComponent,
    AddLandLordComponent,
    EditLandLordComponent,
    EditTenantComponent,
    AddTenantComponent,
    RentlistdetailsComponent,
   


  ],
  imports: [
   
  FormsModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,

    NgxMatFileInputModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule,
    NgbModule,
    NgChartsModule,
    MatSidenavModule ,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
    

    

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
