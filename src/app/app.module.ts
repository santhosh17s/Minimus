import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WeatherService } from 'src/app/services/weather.service';
import { UiService } from 'src/app/services/uiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { WeatherCardComponent } from 'src/app/UI/weather-card/weather-card.component';
import { AddCardComponent } from 'src/app/UI/add-card/add-card.component';
import { DetailsComponent } from 'src/app/pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent,
    AddComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    WeatherService,
    UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
