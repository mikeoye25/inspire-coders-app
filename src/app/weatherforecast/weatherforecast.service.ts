import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls, WeatherForecast } from './weatherforecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {
  
  private readonly weatherforecastUrl = ApiUrls.WeatherForecast;  

  constructor(private http: HttpClient) { }

  getWeatherForecasts(): Observable<WeatherForecast[]> {
      console.log(`weather fore cast url: ${this.weatherforecastUrl}`);
      return this.http.get<WeatherForecast[]>(`${this.weatherforecastUrl}`);
  }
}
