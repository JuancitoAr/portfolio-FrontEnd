import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidades-duras',
  templateUrl: './habilidades-duras.component.html',
  styleUrls: ['./habilidades-duras.component.css']
})
export class HabilidadesDurasComponent {

  public skillsDuras: Skill[] = [];
  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private skill: SkillService) {}

  ngOnInit(): void {
    this.getSkillDura();
    this.logueado = this.loginUsaurio.valido;
  }

  getSkillDura(): void {
    this.skill.getSkillDura().subscribe({
      next: (Response: Skill[]) => {
        this.skillsDuras = Response;
      }
    })
  }

}
