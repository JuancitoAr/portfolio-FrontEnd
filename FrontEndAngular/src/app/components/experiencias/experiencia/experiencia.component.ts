import { Component, Input, OnInit } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Input() titulo:string = "";
  @Input() descripcion:string = "";
  @Input() imagen:string = "";

}
