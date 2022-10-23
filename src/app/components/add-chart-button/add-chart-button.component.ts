import { Component, OnInit } from '@angular/core';

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
    console.log("Dieser Button hat funktioniert!")
  }
}
