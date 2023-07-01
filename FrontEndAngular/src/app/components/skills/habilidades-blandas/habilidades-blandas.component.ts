import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  
  onSubmitAddSkillBlanda(addFormSkillBlanda: NgForm) {
    if (addFormSkillBlanda.valid) {
      const nuevaSillBlanda: Skill = {
        "skill_id": 0, //ojo con esta linea
        "tipo_habilidad": (document.getElementById('habilidadBlanda') as HTMLInputElement).value,
        "habilidad": (document.getElementById('nuevaHabilidadBlanda') as HTMLInputElement).value,
        "nivel": (document.getElementById('nivelHabilidadBlanda') as HTMLInputElement).value
      };
      this.skill.createSkill(nuevaSillBlanda).subscribe(
        (response) => {
          (document.getElementById('habilidadDura') as HTMLInputElement).value = '';
          (document.getElementById('nuevaHabilidadDura') as HTMLInputElement).value = '';
          (document.getElementById('nivelHabilidadDura') as HTMLInputElement).value = '';
          this.getSkillBlanda();
          document.getElementById('closeModalAddSkillBlanda')?.click()
        }
      );
    }
  }
}
