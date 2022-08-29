import { Component, OnInit } from '@angular/core';
import { Employee, WeatherForecast } from '../weatherforecast';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {

  employees: Employee[] = [
    {id: 1, name: "E 001", description: "E 001 des", email: "e001@email.com"},
    {id: 2, name: "E 002", description: "E 002 des", email: "e002@email.com"},
    {id: 3, name: "E 003", description: "E 003 des", email: "e003@email.com"},
    {id: 4, name: "E 004", description: "E 004 des", email: "e004@email.com"}
  ];

  selectedEmployee: Employee = {};
  
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

  public createEmployee(e: Employee){
    this.employees.push(e);
  }

  public selectEmployee(e: Employee){
    this.selectedEmployee = e;
  }

}
