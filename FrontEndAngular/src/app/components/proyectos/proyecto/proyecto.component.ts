import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService, private proyecto: ProyectoService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Output() proyectoEliminado: EventEmitter<void> = new EventEmitter<void>();

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
        this.proyectoEliminado.emit();
      }
    })
  }

}
