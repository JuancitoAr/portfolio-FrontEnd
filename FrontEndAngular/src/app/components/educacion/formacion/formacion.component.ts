import { Component, Input, OnInit } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

  @Input() estudio_id:string = "";
  @Input() nivel:string = "";
  @Input() institucion:string = "";
  @Input() titulo:string = "";
  @Input() estado:string = "";
  @Input() descripcion:string = "";
  
}
