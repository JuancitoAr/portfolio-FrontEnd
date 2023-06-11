import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  logueado:boolean = false;

  constructor (private loginUsaurio: LoginUsuarioService){}

  ngOnInit():void{
    this.logueado = this.loginUsaurio.valido;
  }


}
