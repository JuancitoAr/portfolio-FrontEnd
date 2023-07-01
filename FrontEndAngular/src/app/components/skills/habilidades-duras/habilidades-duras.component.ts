import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmitAddSkillDura(addFormSkillDura: NgForm) {
    if (addFormSkillDura.valid) {
      const nuevaSillDura: Skill = {
        "skill_id": 0, //ojo con esta linea
        "tipo_habilidad": (document.getElementById('habilidadDura') as HTMLInputElement).value,
        "habilidad": (document.getElementById('nuevaHabilidadDura') as HTMLInputElement).value,
        "nivel": (document.getElementById('nivelHabilidadDura') as HTMLInputElement).value
      };
      this.skill.createSkill(nuevaSillDura).subscribe(
        (response) => {
          (document.getElementById('habilidadDura') as HTMLInputElement).value = '';
          (document.getElementById('nuevaHabilidadDura') as HTMLInputElement).value = '';
          (document.getElementById('nivelHabilidadDura') as HTMLInputElement).value = '';
          this.getSkillDura();
          document.getElementById('closeModalAddSkillDura')?.click()
        }
      );
    }
  }
}