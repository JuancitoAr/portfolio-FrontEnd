import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidad-dura-individual',
  templateUrl: './habilidad-dura-individual.component.html',
  styleUrls: ['./habilidad-dura-individual.component.css']
})
export class HabilidadDuraIndividualComponent implements OnInit {

  @ViewChild('editFormSkillDura') editFormSkillDura!: NgForm;

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private skill: SkillService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() actualizarSkill: EventEmitter<void> = new EventEmitter<void>();
  
  @Input() skill_id:number = 0;
  @Input() tipo_habilidad:string = "";
  @Input() habilidad:string = "";
  @Input() nivel:string ="";

  public deleteSkill (skill_id:number): void{
    this.skill.deleteSkill(skill_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteSkillDura' + skill_id )?.click()
        this.actualizarSkill.emit();
      }
    })
  }

  public editSkillDura (skill_id:number): void{
    if (this.editFormSkillDura.valid) {
      const editarSkillDura: Skill = {
        "skill_id": 0, //ojo con esta linea
        "tipo_habilidad": "Habilidad Dura",
        "habilidad": this.editFormSkillDura.value.editarHabilidad,
        "nivel": this.editFormSkillDura.value.nivelHabilidad
      };
      this.skill.updateSkill(skill_id, editarSkillDura).subscribe(
        (response) => {
          this.editFormSkillDura.reset();
          document.getElementById('closeModalEditSkillDura'+ skill_id)?.click()
          this.actualizarSkill.emit();
        }
      );
    }
  }
}
