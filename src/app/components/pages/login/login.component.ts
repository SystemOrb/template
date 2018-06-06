import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../../models/users.models';
import { UserService } from '../../../services/services.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  email: string;
  password: string;
  form: FormGroup;
  auth2: any;
  constructor(private _user: UserService, private _route: Router) {
    init_plugins();
   }
   ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required])
    });
    this.signGoogle(); // Inicializamos Google
   }
   /*****************************************************************
    * LOGIN CON GOOGLE
    *****************************************************************/
   signGoogle() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '622647056584-08a1d1q9u5dcnaijice893k4to6hcfg4.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignIn(document.getElementById('signGoogle'));
    });
   }
   attachSignIn(DOM_ELEMENT) {
    this.auth2.attachClickHandler( DOM_ELEMENT, {}, (GoogleUser) => {
      // let profile = GoogleUser.getBasicProfile();
      const token = GoogleUser.getAuthResponse().id_token;
      this._user.loginGoogle(token).subscribe(
         (response: any) => window.location.href = '#/dashboard');
      // console.log(token);
    });
   }
   /*********************************************************************************
    * Login Normal
    *********************************************************************************/
   Login() {
     if (!this.form.valid) {
       return;
     }
     const loginData = new UserData(
      null,
      this.form.value.email,
      this.form.value.password
     );
     this._user.loginUser(loginData).subscribe(
       (response: any) => this._route.navigate(['/dashboard'])
     );
    }


}
