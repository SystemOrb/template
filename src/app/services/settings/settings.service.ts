import { Injectable, Inject } from '@angular/core';
import { Theme } from './settings.interface';
import { DOCUMENT } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  Theme: Theme = {
    theme: 'default-dark',
    themeUrl: 'assets/css/colors/default-dark.css'
  };
  constructor(@Inject(DOCUMENT) private _document) {
    this.checkTheme();
   }

  changeTheme(themeObject: Theme) {
    this.Theme.theme = themeObject.theme;
    this.Theme.themeUrl = themeObject.themeUrl;
    this.saveTheme();
  }
  saveTheme() {
    localStorage.setItem('theme', JSON.stringify(this.Theme));
  }
  loadTheme() {
    if (localStorage.getItem('theme')) {
      this.Theme = JSON.parse(localStorage.getItem('theme'));
      this._document.getElementById('theme').setAttribute('href', this.Theme.themeUrl);
    } else {
      this._document.getElementById('theme').setAttribute('href', this.Theme.themeUrl);
    }
  }
checkTheme() {
  const selector = this._document.getElementsByClassName('selector');
  const theme = this.Theme.theme;
  for (const ref of selector) {
    if (ref.getAttribute('data-themex') === theme) {
      ref.classList.add('working');
      break;
    }
  }
 }
}
