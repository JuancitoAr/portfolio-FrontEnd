import { Injectable } from '@angular/core';
import { ExperienciaLaboral } from '../models/experienciaLaboral';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaLaboralService {

  private URLBackEnd = "https://portfolio-backend-ap-zabb.onrender.com";

  constructor(private http: HttpClient) { }

  public getExperienciaLaboral(): Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(`${this.URLBackEnd}/experiencia/listar`);
  }

}
