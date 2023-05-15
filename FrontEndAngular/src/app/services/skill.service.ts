import { Injectable } from '@angular/core';
import { RaizService } from './raiz.service';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends RaizService<Skill> {
  constructor(protected override http: HttpClient) {
    super(http, 'skills');
  }
}
