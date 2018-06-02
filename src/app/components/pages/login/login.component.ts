import { Component} from '@angular/core';
import { Router } from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private route: Router) {
    init_plugins();
   }
  login() {
    this.route.navigate(['/dashboard']);
  }

}
