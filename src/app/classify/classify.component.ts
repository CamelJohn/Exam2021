import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  
  favoriteSeason: string;
  selectedNetwork; 
  networks: string[] = ['BBC', 'CNN', 'NBC'];
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedNetwork = this.route.snapshot.params.network;
  }

}
