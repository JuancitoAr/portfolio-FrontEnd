import { Component, Input, OnInit } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-habilidad-dura-individual',
  templateUrl: './habilidad-dura-individual.component.html',
  styleUrls: ['./habilidad-dura-individual.component.css']
})
export class HabilidadDuraIndividualComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }
  
  @Input() tipo_habilidad:string = "";
  @Input() habilidad:string = "";
  @Input() nivel:string ="";

}
