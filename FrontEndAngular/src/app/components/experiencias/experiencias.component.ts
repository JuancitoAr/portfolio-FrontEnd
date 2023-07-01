import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { ExperienciaLaboralService } from 'src/app/services/experienciaLaboral.service';
import { ExperienciaLaboral } from 'src/app/models/experienciaLaboral';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  public experienciasLaborales: ExperienciaLaboral[] = [];
  logueado: boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private experienciaLaboral: ExperienciaLaboralService) { }

  ngOnInit(): void {
    this.getExperienciaLaboral();
    this.logueado = this.loginUsaurio.valido;
  }

  getExperienciaLaboral(): void {
    this.experienciaLaboral.getExperienciaLaboral().subscribe({
      next: (Response: ExperienciaLaboral[]) => {
        this.experienciasLaborales = Response;
      }
    })
  }

  onSubmitAddExp(addFormExp: NgForm) {
    if (addFormExp.valid) {
      const nuevaExperienciaLaboral: ExperienciaLaboral = {
        "experiencia_laboral_id": 0, //ojo con esta linea
        "titulo": (document.getElementById('tituloExp') as HTMLInputElement).value,
        "descripcion": (document.getElementById('descripcionExp') as HTMLInputElement).value,
        "imagen": (document.getElementById('imagenExp') as HTMLInputElement).value
      };
      this.experienciaLaboral.createExperienciaLaboral(nuevaExperienciaLaboral).subscribe(
        (response) => {
          (document.getElementById('tituloExp') as HTMLInputElement).value = '';
          (document.getElementById('descripcionExp') as HTMLInputElement).value = '';
          (document.getElementById('imagenExp') as HTMLInputElement).value = '';
          this.getExperienciaLaboral();
          document.getElementById('closeModalAddExp')?.click()
        }
      );
    }
  }
}
