import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/loginUsuario';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSubmit = false;
  valido = false;
  errorAcceso = false;
  accesoCorrecto = false;
  usuario: LoginUsuario | undefined;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })


  constructor(private loginUsuario: LoginUsuarioService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.valido = false;
    this.errorAcceso = false;
    this.accesoCorrecto = false;
    this.getAdmin();
  }

  public getAdmin(): void {
    this.loginUsuario.getLoginUsuario().subscribe({
      next: (response: LoginUsuario) => {
        this.usuario = response;
      }
    })
  }

  onSubmit() {
    this.formSubmit = true;
    if (this.usuario?.email == this.form.value.email && this.usuario?.password == this.form.value.password) {
      this.loginUsuario.valido = true;
      this.correcto();
    }
    else if (this.form.value.email == "" && this.form.value.password == "") {
      this.form.markAllAsTouched();
    }
    else {
      this.error();
    }
  }

  error() {
    this.errorAcceso = true;
    setTimeout(() => {
      this.errorAcceso = false;
    }, 2500);
    this.form.reset();
  }

  correcto() {
    this.accesoCorrecto = true;
    setTimeout(() => {
      this.accesoCorrecto = false;
      this.router.navigate(['/portfolio']);
    }, 3500);
  }


  // Estos metodos se crean para obtener la info del formulario y aplicar las validaciones
  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
