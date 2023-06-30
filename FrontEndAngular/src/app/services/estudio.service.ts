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

  public createEstudio(estudio: Estudio): Observable<Estudio>{
    return this.http.post<Estudio>(`${this.URLBackEnd}/estudio/crear`, estudio)
  }

  public deleteEstudio(estudio_id: number): Observable<any>{
    return this.http.delete(`${this.URLBackEnd}/estudio/borrar/${estudio_id}`);
  }

}
