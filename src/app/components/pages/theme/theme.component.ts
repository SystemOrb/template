import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import * as $ from 'jquery';
import { Theme } from '../../../services/settings/settings.interface';
import { SettingsService } from '../../../services/services.index';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styles: []
})
export class ThemeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, private themeService: SettingsService) { }

  ngOnInit() {

  }
  getTheme(attrColor: string, link: any) {


    const url = 'assets/css/colors/' + attrColor + '.css';
    this._document.getElementById('theme').setAttribute('href', url);
    const newTheme: Theme = {
      theme: attrColor,
      themeUrl: url
    };
    this.themeService.changeTheme(newTheme);

    // this.activator(link);
  }
  /*activator(ref: any) {
    // const selectors = this._document.getElementByClassName('selector');
    this.themeService.checkTheme(this._document.getElementsByClassName('selector'));
    /*for (const htmlElement of this._document.getElementByClassName('selector')) {
      htmlElement.classList.remove('working');
    }
    ref.classList.add('working');

  }
*/
// }
}
