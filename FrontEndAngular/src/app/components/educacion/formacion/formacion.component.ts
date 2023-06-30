import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EstudioService } from 'src/app/services/estudio.service';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private estudio: EstudioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() educacionEliminada: EventEmitter<void> = new EventEmitter<void>();

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
        this.educacionEliminada.emit();
      }
    })
  }
  
}
