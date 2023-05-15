import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { RaizService } from './raiz.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends RaizService<Usuario> {

constructor(protected override http: HttpClient) { 
  super(http, 'usuarios');
  }
}