import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventbookingComponent } from './eventbooking/eventbooking.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticGuard } from './authenticguard.service';
import { LogineventComponent } from './loginevent/loginevent.component';

import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';




const routes: Routes = [ {path:'', component:HeaderComponent},
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'payment', component:PaymentComponent},
{path:'profile', component:ProfileComponent},
{ path: 'loginevent/header', component: HeaderComponent },
{ path: 'loginevent/profile', component: ProfileComponent },


{path:'details', component:DetailsComponent},

{path:'loginevent', component:LogineventComponent},
{path:'eventbooking' , canActivate:[AuthenticGuard],component:EventbookingComponent},
{path:'profile', canActivate:[AuthenticGuard],component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
