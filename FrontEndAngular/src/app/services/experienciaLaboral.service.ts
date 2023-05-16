import { Injectable } from '@angular/core';
import { RaizService } from './raiz.service';
import { ExperienciaLaboral } from '../models/experienciaLaboral';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaLaboralService extends RaizService <ExperienciaLaboral> {
  constructor(protected override http: HttpClient) {
    super(http, 'experienciasLaborales');
  }
}
