import { Component } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  public proyectos: Proyecto[] = [];
  logueado: boolean = false;

  constructor (private loginUsaurio: LoginUsuarioService, private proyecto: ProyectoService) { }

  ngOnInit(): void {
    this.getProyecto();
    this.logueado = this.loginUsaurio.valido;
  }

  getProyecto(): void {
    this.proyecto.getProyecto().subscribe({
      next: (Response: Proyecto[]) => {
        this.proyectos = Response;
      }
    })
  }


}
