import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings/settings.service';
declare function init_plugins();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(theme: SettingsService) {
    init_plugins();
    theme.loadTheme();
  }
  ngOnInit() {

  }
}
