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

}
