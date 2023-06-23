import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  logueado: boolean = false;
  public usuario: Usuario | any;

  constructor(private acercaDeMi: UsuarioService, private loginUsaurio: LoginUsuarioService) { }

  ngOnInit(): void {
    this.getUser();
    this.logueado = this.loginUsaurio.valido;
  }

  public getUser(): void {
    this.acercaDeMi.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  onSubmitPerfil() {
    this.usuario.foto = (document.getElementById('foto') as HTMLInputElement).value;
    this.usuario.apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    this.usuario.nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    this.usuario.titulo = (document.getElementById('titulo') as HTMLInputElement).value;
    this.acercaDeMi.updateUsuarioPerfil(this.usuario).subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
        (document.getElementById('foto') as HTMLInputElement).value = '';
        (document.getElementById('apellido') as HTMLInputElement).value = '';
        (document.getElementById('nombre') as HTMLInputElement).value = '';
        (document.getElementById('titulo') as HTMLInputElement).value = '';
      }
    });
    this.getUser();
    document.getElementById('closeModalPerfil')?.click()
  }

  onSubmitAcerca() {
    this.usuario.descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
    this.acercaDeMi.updateUsuarioAcerca(this.usuario).subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
        (document.getElementById('descripcion') as HTMLInputElement).value = '';
      }
    });
    this.getUser();
    document.getElementById('closeModalAcerca')?.click();
  }
}
