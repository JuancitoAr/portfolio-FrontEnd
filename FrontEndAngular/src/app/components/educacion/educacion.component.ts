import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmitAddEst(addFormEst: NgForm) {
    if (addFormEst.valid) {
      const nuevoEstudio: Estudio = {
        "estudio_id": 0, //ojo con esta linea
        "nivel": (document.getElementById('nuevoGrado') as HTMLInputElement).value,
        "institucion": (document.getElementById('nuevaInstitucion') as HTMLInputElement).value,
        "titulo": (document.getElementById('nuevoTitulo') as HTMLInputElement).value,
        "estado": (document.getElementById('nuevoEstado') as HTMLInputElement).value,
        "descripcion": (document.getElementById('nuevaDescripcionEducacion') as HTMLInputElement).value
      };
      this.estudio.createEstudio(nuevoEstudio).subscribe(
        (response) => {
          (document.getElementById('nuevoGrado') as HTMLInputElement).value = '';
          (document.getElementById('nuevaInstitucion') as HTMLInputElement).value = '';
          (document.getElementById('nuevoTitulo') as HTMLInputElement).value = '';
          (document.getElementById('nuevoEstado') as HTMLInputElement).value = '';
          (document.getElementById('nuevaDescripcionEducacion') as HTMLInputElement).value = '';
          this.getEstudio();
          document.getElementById('closeModalAddEst')?.click()
        }
      );
    }
  }

}