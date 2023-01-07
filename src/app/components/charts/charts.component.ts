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

  AddChart(cryptoShortcutList: string[])
  {
      cryptoShortcutList.forEach(shortcut => {
        this.LocalStorageService.saveCryptoPersistently(shortcut)
        this.cryptoDataKeys.push(shortcut)
      })
    this.cryptoDataKeys = this.LocalStorageService.getAllPersistentCrypto();
    console.log(this.cryptoDataKeys)
  }

  removeCryptoChart(cryptoShortcut: string) {
    this.LocalStorageService.removeCrypto(cryptoShortcut);
    this.cryptoDataKeys = this.cryptoDataKeys.filter(item => item !== cryptoShortcut)
  }
}
