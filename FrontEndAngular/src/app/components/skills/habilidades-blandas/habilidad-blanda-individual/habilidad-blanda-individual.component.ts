import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-habilidad-blanda-individual',
  templateUrl: './habilidad-blanda-individual.component.html',
  styleUrls: ['./habilidad-blanda-individual.component.css']
})
export class HabilidadBlandaIndividualComponent {

  logueado:boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService) {}

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }
  
}
