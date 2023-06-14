import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { ExperienciaLaboralService } from 'src/app/services/experienciaLaboral.service';
import { ExperienciaLaboral } from 'src/app/models/experienciaLaboral';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  public experienciasLaborales: ExperienciaLaboral[]=[];
  logueado: boolean = false;

  constructor (private loginUsaurio: LoginUsuarioService, private experienciaLaboral: ExperienciaLaboralService) { }

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


}
