import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @ViewChild('editFormProyecto') editFormProyecto!: NgForm;

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private proyecto: ProyectoService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() actualizarProyecto: EventEmitter<void> = new EventEmitter<void>();

  @Input() proyecto_id:number = 0;
  @Input() titulo:string = "";
  @Input() fecha_inicio:string = "";
  @Input() descripcion:string = "";
  @Input() link:string = "";
  @Input() mascara:string = "";

  public deleteProyecto (proyecto_id:number): void{
    this.proyecto.deleteProyecto(proyecto_id).subscribe({
      next: () =>{
        document.getElementById('closeModalDeleteProyecto' + proyecto_id )?.click()
        this.actualizarProyecto.emit();
      }
    })
  }

  public editProyecto (proyecto_id:number): void{
    if (this.editFormProyecto.valid) {
      const editarProyecto: Proyecto = {
        "proyecto_id": 0, //ojo con esta linea
        "titulo": this.editFormProyecto.value.editarTituloProyecto,
        "fecha_inicio": this.editFormProyecto.value.editarFecha,
        "descripcion": this.editFormProyecto.value.editarDescripcionP,
        "link": this.editFormProyecto.value.editarEnlaceP,
        "mascara": this.editFormProyecto.value.editarTextoEnlaceP
      };
      this.proyecto.updateProyecto(proyecto_id, editarProyecto).subscribe(
        (response) => {
          this.editFormProyecto.reset();
          document.getElementById('closeModalEditProyecto'+ proyecto_id)?.click()
          this.actualizarProyecto.emit();
        }
      );
    }
  }
}
