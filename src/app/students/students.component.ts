import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  mathAvg: number;
  psychometric: number;
  tuition: boolean;
  isPredict: boolean;
  scores: number[];
  paid: boolean = false;

  constructor() {
    this.scores = [0.5, 1];
  }

  ngOnInit(): void {
  }

  handlePredict() {
    this.isPredict = true;
  }

  handleSave() {

  }

  handleCancel() {
    this.isPredict = false;
  }
}
