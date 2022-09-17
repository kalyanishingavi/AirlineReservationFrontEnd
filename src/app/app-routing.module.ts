import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { AdminSearchFlightsComponent } from './components/admin-search-flights/admin-search-flights.component';
import { AllowedAdminComponent } from './components/allowed-admin/allowed-admin.component';
import { AlloweduserComponent } from './components/alloweduser/alloweduser.component';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { AuthComponent } from './components/auth/auth.component';
import { BookflightsComponent } from './components/bookflights/bookflights.component';
import { BookingComponentComponent } from './components/booking-component/booking-component.component';
import { CheckinComponentComponent } from './components/checkin-component/checkin-component.component';
import { FlightComponentComponent } from './components/flight-component/flight-component.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';
import { UpdateFlightComponent } from './components/update-flight/update-flight.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:NavbarComponent},
  {path:"test",component:TestComponent},
  {path:"allFlights",component:FlightComponentComponent,canActivate: [AuthService]},
  {path:"Booking",component:BookingComponentComponent,canActivate: [AuthService]},
  {path:"checkin",component:CheckinComponentComponent},
  {path:"signup",component:SignupComponent},
  {path:"login/back",component:LoginComponent},
  {path: 'login', component: AuthComponent},
  {path: 'admin', component: AuthGuardComponent},
  {path:"add/:bookid",component:BookflightsComponent},
  {path:"search",component:AddFlightsComponent},
  {path:"update-flight/:id",component:UpdateFlightComponent},
  {path:'staff',component:AdminSearchFlightsComponent},
  {path:"allow",component:AllowedAdminComponent},
  {path:"allowuser",component:AlloweduserComponent},
  { path:"adminSearchFlight", component: AdminSearchFlightsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
