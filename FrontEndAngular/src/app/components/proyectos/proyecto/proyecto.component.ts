import { Component, Input, OnInit } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Input() titulo:string = "";
  @Input() fecha_inicio:string = "";
  @Input() descripcion:string = "";
  @Input() link:string = "";
  @Input() mascara:string = "";

}
