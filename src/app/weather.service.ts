import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = "https://api.openweathermap.org/data/2.5/weather?q="; 
  private KEY = "c2addb75777e24415bc0705646e8a194"; 
  private IMP = "units=metric"; 

  constructor() { }
}
