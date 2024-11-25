import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    userType: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit() {
    console.log(this.form.value);
  }

  submit() {
    if (this.form.valid) {
      console.log('Formulario de registro enviado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
