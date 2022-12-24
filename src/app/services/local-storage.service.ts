import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService
{
  localstorage: Storage;

  constructor()
  {
    this.localstorage = window.localStorage;
    //console.log(this.localstorage)

    //this.resetPersistentCryptoData(); //TODO Just for debugging --> Delete after finish
  }

  saveCryptoPersistently(cryptoShortcut: string)
  {
    this.localstorage.setItem(cryptoShortcut, "true");
  }

  getAllPersistentCrypto(): string[]
  {
    return Object.keys(this.localstorage);
  }

  isPersistenlySaved(cryptoShortcut: string)
  {
    return this.localstorage.getItem(cryptoShortcut) === "true";
  }

  resetPersistentCryptoData()
  {
    Object.keys(this.localstorage).forEach(key =>
    {
      this.localstorage.removeItem(key);
    })
    console.log("Persistenter Speicher wurde zurückgesetzt!")
  }

  removeCrypto(cryptoShortcut: string)
  {
    this.localstorage.removeItem(cryptoShortcut);
  }
}
