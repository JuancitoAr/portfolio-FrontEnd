import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent {

  public skillsBlandas: Skill[] = [];
  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private skill: SkillService) {}

  ngOnInit(): void {
    this.getSkillBlanda();
    this.logueado = this.loginUsaurio.valido;
  }

  getSkillBlanda(): void {
    this.skill.getSkillBlanda().subscribe({
      next: (Response: Skill[]) => {
        this.skillsBlandas = Response;
      }
    })
  }  
  
}
