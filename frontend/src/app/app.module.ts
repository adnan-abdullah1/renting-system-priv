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


  ],
  imports: [
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
    NgbModule
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
