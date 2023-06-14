import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EstudioService {

  private URLBackEnd = "https://portfolio-backend-ap-zabb.onrender.com";

  constructor(private http: HttpClient) { }

  public getEstudio(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(`${this.URLBackEnd}/estudio/listar`);
  }

}
