import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventbookingComponent } from './eventbooking/eventbooking.component';

import { ProfileComponent } from './profile/profile.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { LogineventComponent } from './loginevent/loginevent.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    EventbookingComponent,
    ProfileComponent,
    LoginhomeComponent,
    LogineventComponent,
    DetailsComponent,
    HeaderComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
    FormsModule,
   
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '809232947583-650bfuk6fcjqe4277l6ic9d3sg8t12rh.apps.googleusercontent.com'
            )
          }
        
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
