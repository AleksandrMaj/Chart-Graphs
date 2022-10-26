import {Component, OnInit} from '@angular/core';
import {ChartsComponent} from "../charts/charts.component";

@Component({
  selector: 'app-add-chart-popup',
  templateUrl: './add-chart-popup.component.html',
  styleUrls: ['./add-chart-popup.component.css']
})
export class AddChartPopupComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById("popup").addEventListener('click',event => {
      if(event.target != document.getElementById("popup")) return;
      ChartsComponent.showPopup = false;
    })
  }

  AddChart() {
    ChartsComponent.showPopup = false;
  }
}
