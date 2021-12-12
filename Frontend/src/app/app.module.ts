import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list';
import {  MatListModule } from '@angular/material/list';
import {  MatInputModule } from '@angular/material/input';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { WeightListComponent } from './components/weight-list/weight-list.component';
import { WeightItemComponent } from './components/weight-item/weight-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignupComponent,
    SigninComponent,
    LandingComponent,
    DashboardComponent,
    WeightListComponent,
    WeightItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      newestOnTop: true,
      progressBar: true,
      progressAnimation: "increasing",
    }),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    FontAwesomeModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
