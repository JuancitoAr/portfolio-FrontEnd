import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  
  private URLBackEnd = "https://portfolio-backend-ap-zabb.onrender.com";

  constructor(private http: HttpClient) { }

    public getSkillDura(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.URLBackEnd}/skill/listhdura`);
  }

  public getSkillBlanda(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.URLBackEnd}/skill/listhblanda`);
  }

  public createSkill(skill: Skill): Observable<Skill>{
    return this.http.post<Skill>(`${this.URLBackEnd}/skill/crear`, skill)
  }

  public deleteSkill(skill_id: number): Observable<any>{
    return this.http.delete(`${this.URLBackEnd}/skill/borrar/${skill_id}`);
  }

  // Este metodo no esta hecho para q se pueda modificar el tipo de habilidad, si es dura o blanda, mantiene el detalle de base
  public updateSkill(skill_id: number, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.URLBackEnd}/skill/editarcorta/${skill_id}`,skill);
  }
}
