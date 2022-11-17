import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public static showPopup: boolean;
  public classRefence = ChartsComponent;

  constructor() {
    ChartsComponent.showPopup = true;
  }

  ngOnInit(): void {
  }
}
