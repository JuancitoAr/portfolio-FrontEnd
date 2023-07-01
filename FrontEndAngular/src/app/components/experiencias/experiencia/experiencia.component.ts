import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExperienciaLaboral } from 'src/app/models/experienciaLaboral';
import { ExperienciaLaboralService } from 'src/app/services/experienciaLaboral.service';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @ViewChild('editFormExp') editFormExp!: NgForm;

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private experienciaLaboral: ExperienciaLaboralService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() actualizarExperiencia: EventEmitter<void> = new EventEmitter<void>();

  @Input() experiencia_laboral_id:number = 0;
  @Input() titulo:string = "";
  @Input() descripcion:string = "";
  @Input() imagen:string = "";

  public deleteExperienciaLaboral (experiencia_laboral_id:number): void{
    this.experienciaLaboral.deleteExperienciaLaboral(experiencia_laboral_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteExp' + experiencia_laboral_id)?.click()
        this.actualizarExperiencia.emit();
      }
    })
  }

  public editExperienciaLaboral (experiencia_laboral_id:number): void{
    if (this.editFormExp.valid) {
      const editarExperienciaLaboral: ExperienciaLaboral = {
        "experiencia_laboral_id": 0, //ojo con esta linea
        "titulo": this.editFormExp.value.editarTitulo,
        "descripcion": this.editFormExp.value.editarDescripcionE,
        "imagen": this.editFormExp.value.enlaceEditarExperienciaLaboral
      };
      this.experienciaLaboral.updateExperienciaLaboral(experiencia_laboral_id, editarExperienciaLaboral).subscribe(
        (response) => {
          this.editFormExp.reset();
          document.getElementById('closeModalEditExp'+ experiencia_laboral_id)?.click()
          this.actualizarExperiencia.emit();
        }
      );
    }
  }
}
