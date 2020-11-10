import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {
  city; 
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.params.city; 
  }

}
