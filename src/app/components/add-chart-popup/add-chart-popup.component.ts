import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ChartsComponent} from "../charts/charts.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-chart-popup',
  templateUrl: './add-chart-popup.component.html',
  styleUrls: ['./add-chart-popup.component.css']
})
export class AddChartPopupComponent implements OnInit {

  @Output() newCryptosToAddEvent = new EventEmitter<string[]>();
  @Input() excludeCryptoList: string[] = [];
  supportedCryptos: any = {};
  supportedCryptosKeys: string[] = [];
  selectedCryptos: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById("popup").addEventListener('click', event => {
      if (event.target != document.getElementById("popup")) return;
      // @ts-ignore
      ChartsComponent.showPopup = false;
    })

    this.http.get('http://localhost:3080/supportedcryptos').subscribe(data => {
      for (const [key, value] of Object.entries(data)) {
        if(this.excludeCryptoList.includes(key)) {
          // @ts-ignore
          delete data[key];
        }
      }

      this.supportedCryptos = data;
      this.supportedCryptosKeys = Object.keys(data);
    });

    // @ts-ignore
    document.getElementById('scroll-list').addEventListener('click', event => {
      // @ts-ignore
      let currentNode = event.target.parentNode;
      while (currentNode.getAttribute('ng-reflect-crypto') == null) {
        currentNode = currentNode.parentNode;
      }
      const checkbox = currentNode.lastChild.lastChild.lastChild
      checkbox.checked = !checkbox.checked

      if (checkbox.checked) this.selectedCryptos++;
      if (!checkbox.checked) this.selectedCryptos--;
    })
  }

  AddChart() {
    const cryptoElements = document.querySelectorAll('.checkbox:checked');
    ChartsComponent.showPopup = false;

    if (cryptoElements.length == 0) return;

    let cryptoShortcuts: string[] = [];

    cryptoElements.forEach(value => {
      cryptoShortcuts.push(value.id)
    })

    this.newCryptosToAddEvent.emit(cryptoShortcuts)
  }
}
