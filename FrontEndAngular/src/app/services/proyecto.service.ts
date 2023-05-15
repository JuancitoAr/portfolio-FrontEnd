import { Injectable } from '@angular/core';
import { RaizService } from './raiz.service';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService extends RaizService<Proyecto> {
  constructor(protected override http: HttpClient) {
    super(http, 'proyectos');
  }
}
