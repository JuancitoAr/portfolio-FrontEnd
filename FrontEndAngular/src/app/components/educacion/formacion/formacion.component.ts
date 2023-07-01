import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  @ViewChild('editFormEst') editFormEst!: NgForm;

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private estudio: EstudioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() actualizarEstudio: EventEmitter<void> = new EventEmitter<void>();

  @Input() estudio_id:number = 0;
  @Input() nivel:string = "";
  @Input() institucion:string = "";
  @Input() titulo:string = "";
  @Input() estado:string = "";
  @Input() descripcion:string = "";

  public deleteEstudio (estudio_id:number): void{
    this.estudio.deleteEstudio(estudio_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteEst' + estudio_id )?.click()
        this.actualizarEstudio.emit();
      }
    })
  }
  
  public editEstudio (estudio_id:number): void{
    if (this.editFormEst.valid) {
      const editarEstudio: Estudio = {
        "estudio_id": 0, //ojo con esta linea
        "nivel": this.editFormEst.value.editarGrado,
        "institucion": this.editFormEst.value.editarInstitucion,
        "titulo": this.editFormEst.value.editarTitulo,
        "estado": this.editFormEst.value.editarEstado,
        "descripcion": this.editFormEst.value.editarDescripcionEducacion
      };
      this.estudio.updateEstudio(estudio_id, editarEstudio).subscribe(
        (response) => {
          this.editFormEst.reset();
          document.getElementById('closeModalEditEst'+ estudio_id)?.click()
          this.actualizarEstudio.emit();
        }
      );
    }
  }
}
