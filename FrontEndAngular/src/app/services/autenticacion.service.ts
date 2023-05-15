import { Injectable } from '@angular/core';
import { LoginUsuarioService } from './loginUsuario.service';
import { LoginUsuario } from '../models/loginUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  adminUser : any;

  constructor(private loginUsuario: LoginUsuarioService) { 
    this.getAdmin();
  }

  getAdmin(): void {
    this.loginUsuario.getById(1).subscribe((data) => {
      this.adminUser = data;
    });
  }

  authenticate(credenciales: LoginUsuario ): boolean {
    const usuverificado =
    credenciales.email == this.adminUser.email &&
    credenciales.password == this.adminUser.password;
    if (usuverificado) {
      localStorage.setItem('loggedUser', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
  }

}
