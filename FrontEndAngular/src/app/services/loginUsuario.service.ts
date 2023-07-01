import { Injectable } from '@angular/core';
import { LoginUsuario } from '../models/loginUsuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

  private URLBackEnd = "https://portfolio-backend-ap-zabb.onrender.com";
  valido = false;

  constructor(private http: HttpClient) {}

  public getLoginUsuario(): Observable<LoginUsuario> {
    return this.http.get<LoginUsuario>(`${this.URLBackEnd}/loginuser/id/1`);
  }
}
