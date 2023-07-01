import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {

  private URLBackEnd = "https://portfolio-backend-ap-zabb.onrender.com";

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.URLBackEnd}/proyecto/listar`);
  }

  public createProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.URLBackEnd}/proyecto/crear`, proyecto)
  }

  public deleteProyecto(proyecto_id: number): Observable<any>{
    return this.http.delete(`${this.URLBackEnd}/proyecto/borrar/${proyecto_id}`);
  }

  public updateProyecto(proyecto_id: number, proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.URLBackEnd}/proyecto/editar/${proyecto_id}`,proyecto);
  }
}
