import { Component, OnInit } from '@angular/core';
import {ChartsComponent} from "../charts/charts.component";

@Component({
  selector: 'app-add-chart-button',
  templateUrl: './add-chart-button.component.html',
  styleUrls: ['./add-chart-button.component.css']
})
export class AddChartButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openChartPopUp() {
    ChartsComponent.showPopup = true;
  }
}
