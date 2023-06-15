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

}
