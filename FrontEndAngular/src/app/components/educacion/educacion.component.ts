import { Component } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  public estudios: Estudio[]=[];
  logueado: boolean = false;

  constructor (private loginUsaurio: LoginUsuarioService, private estudio: EstudioService){}

  ngOnInit():void{
    this.getEstudio();
    this.logueado = this.loginUsaurio.valido;
  }

  getEstudio(): void {
    this.estudio.getEstudio().subscribe({
      next: (Response: Estudio[]) =>{
        this.estudios = Response;
      }
    })
  }

}
