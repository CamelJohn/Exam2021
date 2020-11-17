import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {
  city; 
  temperature; 
  image; 
  constructor(private route:ActivatedRoute, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.params.city; 
    this.weatherService.searchWeatherData(this.city).subscribe(
      data => {
        this.temperature = data.temperature;
        this.image = data.image; 
      }
    )
  }
}
