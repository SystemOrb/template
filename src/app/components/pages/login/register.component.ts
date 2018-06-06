import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator } from '@angular/forms';
import { UserData } from '../../../models/users.models';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/users/user.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  createUser; // Para los objetos de usuario
  constructor(private _userService: UserService, private _route: Router) { }
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password2: new FormControl(null, [Validators.required]),
      conditions: new FormControl(false)
    }, {validators: this.ValidatorPassword('password', 'password2')});
  }
  ValidatorPassword(pwd: string, pwd2: string): any {
    return (group: FormGroup) => {
      const password = group.controls[pwd].value;
      const password2 = group.controls[pwd2].value;
      // Verificamos si las contraseñas son iguales
      if (password === password2) {
        return null;
      }
      return {
        passwordMatch: true
      };
    };
  }
  registerForm() {
    if (!this.form.valid) {
      return;
    }
    if (!this.form.value.conditions) {
      console.log('Debes aceptar lso terminos y condiciones');
      return;
    }
    // Entonces enviamos la data
    this.createUser = new UserData(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );
    this._userService.registerUser(this.createUser).subscribe(
      (response: any ) => {
        this._route.navigate(['/auth/login']);
      }
    );
  }
}
