import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../weatherforecast';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {
  
  weatherforecasts: WeatherForecast[] = [];

  constructor(private weatherforecastService: WeatherforecastService) {  }

  ngOnInit(): void {
    this.getWeatherforecasts();  
  }

  getWeatherforecasts() {
      this.weatherforecastService.getWeatherForecasts()
          .subscribe(
              w => { 
                this.weatherforecasts = w;   
                console.log(`weather fore casts: ${JSON.stringify(this.weatherforecasts)}`);            
              }
      );
  }

}
