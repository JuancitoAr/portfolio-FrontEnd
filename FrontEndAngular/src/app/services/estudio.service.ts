import { Injectable } from '@angular/core';
import { RaizService } from './raiz.service';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EstudioService extends RaizService <Estudio> {
  constructor(protected override http: HttpClient) {
    super(http, 'estudios');
   }
}
