import { Component } from '@angular/core';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  logueado: boolean = false;

  constructor(private loginUsaurio: LoginUsuarioService) { }

  ngOnInit(): void {
    this.logueado = this.loginUsaurio.valido;
  }

}
