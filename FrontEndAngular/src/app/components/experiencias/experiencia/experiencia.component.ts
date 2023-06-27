import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/services/experienciaLaboral.service';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private experienciaLaboral: ExperienciaLaboralService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() experienciaEliminada: EventEmitter<void> = new EventEmitter<void>();

  @Input() experiencia_laboral_id:number = 0;
  @Input() titulo:string = "";
  @Input() descripcion:string = "";
  @Input() imagen:string = "";

  public deleteExperienciaLaboral (experiencia_laboral_id:number): void{
    this.experienciaLaboral.deleteExperienciaLaboral(experiencia_laboral_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteExp')?.click()
        this.experienciaEliminada.emit();
      }
    })
  }

}
