import {Component, Input, OnInit} from '@angular/core';
import {AddChartPopupComponent} from "../add-chart-popup/add-chart-popup.component";

@Component({
  selector: 'app-single-crypto-field',
  templateUrl: './single-crypto-field.component.html',
  styleUrls: ['./single-crypto-field.component.css']
})
export class SingleCryptoFieldComponent implements OnInit {

  @Input() crypto: string = '';
  name: String = 'ERROR';
  currentValue: number = -1;
  currentValueDisplay: String = "";
  rate: number = 0;

  constructor(private comp: AddChartPopupComponent) {
  }

  ngOnInit(): void {
    this.name = this.comp.supportedCryptos[this.crypto]['name']
    this.currentValue = this.comp.supportedCryptos[this.crypto]['currentValue']
    this.rate = this.comp.supportedCryptos[this.crypto]['rate']
    this.currentValueDisplay = this.currentValue.toLocaleString('en-US', {maximumFractionDigits:10});
  }
}
