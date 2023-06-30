import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmitAddProyecto(addFormProyecto: NgForm) {
    if (addFormProyecto.valid) {
      const nuevoProyecto: Proyecto = {
        "proyecto_id": 0, //ojo con esta linea
        "titulo": (document.getElementById('tituloNuevoProyecto') as HTMLInputElement).value,
        "fecha_inicio": (document.getElementById('nuevaFecha') as HTMLInputElement).value,
        "descripcion": (document.getElementById('nuevaDescripcionP') as HTMLInputElement).value,
        "link": (document.getElementById('nuevoEnlace') as HTMLInputElement).value,
        "mascara": (document.getElementById('textoNuevoEnlace') as HTMLInputElement).value
      };
      this.proyecto.createProyecto(nuevoProyecto).subscribe(
        (response) => {
          (document.getElementById('tituloNuevoProyecto') as HTMLInputElement).value = '';
          (document.getElementById('nuevaFecha') as HTMLInputElement).value = '';
          (document.getElementById('nuevaDescripcionP') as HTMLInputElement).value = '';
          (document.getElementById('nuevoEnlace') as HTMLInputElement).value = '';
          (document.getElementById('textoNuevoEnlace') as HTMLInputElement).value = '';
          this.getProyecto();
          document.getElementById('closeModalAddProyecto')?.click()
        }
      );
    }
  }
}
