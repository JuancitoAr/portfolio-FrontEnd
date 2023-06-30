import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidad-dura-individual',
  templateUrl: './habilidad-dura-individual.component.html',
  styleUrls: ['./habilidad-dura-individual.component.css']
})
export class HabilidadDuraIndividualComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private skill: SkillService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() skillEliminada: EventEmitter<void> = new EventEmitter<void>();
  
  @Input() skill_id:number = 0;
  @Input() tipo_habilidad:string = "";
  @Input() habilidad:string = "";
  @Input() nivel:string ="";

  public deleteSkill (skill_id:number): void{
    this.skill.deleteSkill(skill_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteSkillDura' + skill_id )?.click()
        this.skillEliminada.emit();
      }
    })
  }
}
