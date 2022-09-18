import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponentComponent } from './components/booking-component/booking-component.component';
import { FlightComponentComponent } from './components/flight-component/flight-component.component';
import { CheckinComponentComponent } from './components/checkin-component/checkin-component.component';
import { FareComponentComponent } from './components/fare-component/fare-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestService } from './services/test.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingPipe } from './pipes/booking.pipe';
import { BookingService } from './services/booking.service';
import { FlightSearchService } from './services/flight-search.service';
import { BookflightsComponent } from './components/bookflights/bookflights.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { AdminSearchFlightsComponent } from './components/admin-search-flights/admin-search-flights.component';
import { UpdateFlightComponent } from './components/update-flight/update-flight.component';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { AllowedAdminComponent } from './components/allowed-admin/allowed-admin.component';
import { AlloweduserComponent } from './components/alloweduser/alloweduser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponentComponent,
    FlightComponentComponent,
    CheckinComponentComponent,
    FareComponentComponent,
    LoginComponentComponent,
    TestComponent,
    NavbarComponent,
    BookingPipe,
    BookflightsComponent,
    SignupComponent,
    LoginComponent,
    AuthComponent,
    AddFlightsComponent,
    AdminSearchFlightsComponent,
    UpdateFlightComponent,
    AuthGuardComponent,
    AllowedAdminComponent,
    AlloweduserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  
  providers: [
    TestService,
    BookingService,
    FlightSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
