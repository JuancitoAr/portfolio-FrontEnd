import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private URLBackEnd = "https://portfolio-backend-ap-zabb.onrender.com";

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URLBackEnd}/usuario/id/1`);
  }

  //este metodo sirve para editar todos los campos del usuario
  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.URLBackEnd}/usuario/editar/1`,usuario);
  }

  public updateUsuarioPerfil(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.URLBackEnd}/usuario/editarperfil/1`,usuario);
  }

  public updateUsuarioAcerca(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.URLBackEnd}/usuario/editaracerca/1`,usuario);
  }

}