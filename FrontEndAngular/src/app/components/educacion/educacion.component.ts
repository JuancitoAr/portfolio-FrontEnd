import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  logueado:boolean = false;

  constructor (private loginUsaurio: LoginUsuarioService){}

  ngOnInit():void{
    this.logueado = this.loginUsaurio.valido;
  }

}
