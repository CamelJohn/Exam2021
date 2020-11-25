import { Weather } from './../interfaces/weather';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {
  city:string; 
  temperature:number; 
  image:string; 
  weatherData$:Observable<Weather>;
  hasError:Boolean = false;
  errorMessage:string;

  constructor(private route:ActivatedRoute, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.params.city; 
    this.weatherData$ = this.weatherService.searchWeatherData(this.city); 
    this.weatherData$.subscribe(
      data => {
        this.temperature = data.temperature;
        this.image = data.image; 
      }, 
      error =>{
        console.log(error.message);
        this.hasError = true;
        this.errorMessage = error.message; 
      }
    )
  }
}
