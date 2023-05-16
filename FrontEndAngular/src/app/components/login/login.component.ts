import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private authService: AutenticacionService,  
    private router: Router   
    ) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]],
      }
    )
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  onSubmit(event: Event){
    event.preventDefault();
    const isAuthenticated = this.authService.authenticate(this.form.value);
    if (isAuthenticated) {
      this.router.navigate(['/portfolio']);
    } else {
      alert('Acceso inválido. Por favor, inténtelo otra vez.');
    }
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
