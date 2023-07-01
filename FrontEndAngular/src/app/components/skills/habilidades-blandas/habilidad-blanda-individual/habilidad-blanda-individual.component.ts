import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidad-blanda-individual',
  templateUrl: './habilidad-blanda-individual.component.html',
  styleUrls: ['./habilidad-blanda-individual.component.css']
})
export class HabilidadBlandaIndividualComponent implements OnInit {

  @ViewChild('editFormSkillBlanda') editFormSkillBlanda!: NgForm;

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private skill: SkillService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() actualizarSkill: EventEmitter<void> = new EventEmitter<void>();
  
  @Input() skill_id:number = 0;
  @Input() tipo_habilidad:string = "";
  @Input() habilidad:string = "";
  @Input() nivel:string = "";
  
  public deleteSkill (skill_id:number): void{
    this.skill.deleteSkill(skill_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteSkillBlanda' + skill_id )?.click()
        this.actualizarSkill.emit();
      }
    })
  }

  public editSkillBlanda (skill_id:number): void{
    if (this.editFormSkillBlanda.valid) {
      const editarSkillBlanda: Skill = {
        "skill_id": 0, //ojo con esta linea
        "tipo_habilidad": "Habilidad Blanda",
        "habilidad": this.editFormSkillBlanda.value.editarHabilidad,
        "nivel": this.editFormSkillBlanda.value.nivelHabilidad
      };
      this.skill.updateSkill(skill_id, editarSkillBlanda).subscribe(
        (response) => {
          this.editFormSkillBlanda.reset();
          document.getElementById('closeModalEditSkillBlanda'+ skill_id)?.click()
          this.actualizarSkill.emit();
        }
      );
    }
  }
}
