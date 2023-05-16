import { Injectable } from '@angular/core';
import { RaizService } from './raiz.service';
import { LoginUsuario } from '../models/loginUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService extends RaizService <LoginUsuario> {
  constructor(protected override http: HttpClient) {
    super(http, 'loginUsuario');
  }

}
