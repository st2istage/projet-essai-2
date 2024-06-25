import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class services {
  key = "encrypt!135790";

  constructor() {}
  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
  }


  public decrypt(passwordToDecrypt: string) {
    return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}
