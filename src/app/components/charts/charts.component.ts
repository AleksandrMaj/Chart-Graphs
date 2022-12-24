import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit
{
  static showPopup: boolean;
  classRefence = ChartsComponent;
  cryptoDataKeys: string[] = [];

  constructor(private LocalStorageService: LocalStorageService)
  {
    ChartsComponent.showPopup = false;
    this.cryptoDataKeys = LocalStorageService.getAllPersistentCrypto();
  }

  ngOnInit(): void
  {
  }

  AddChart(cryptoShortcutList: string[]) //TODO Muss abgeändert werden! Glaube ich hab jetzt nirgendwo, dass die Cryptos in den local storage geschrieben werden
  {
      cryptoShortcutList.forEach(shortcut => {
        this.LocalStorageService.saveCryptoPersistently(shortcut)
        this.cryptoDataKeys.push(shortcut)
      })
  }

  removeCryptoChart(cryptoShortcut: string) {
    this.LocalStorageService.removeCrypto(cryptoShortcut);
    this.cryptoDataKeys = this.cryptoDataKeys.filter(item => item !== cryptoShortcut)
  }
}
