import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  logueado:boolean = false;

  constructor (private loginUsaurio: LoginUsuarioService){}

  ngOnInit():void{
    this.logueado = this.loginUsaurio.valido;
  }


}
