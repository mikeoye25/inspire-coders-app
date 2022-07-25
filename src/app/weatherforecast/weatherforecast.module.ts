import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherforecastRoutingModule } from './weatherforecast-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    WeatherforecastRoutingModule
  ],
  providers: [
  ],
})
export class WeatherforecastModule { }
