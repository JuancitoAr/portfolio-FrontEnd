import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  logueado:boolean = false;
  public usuario:Usuario | undefined;

  constructor(private acercaDeMi: UsuarioService) { }

  ngOnInit(): void {
    this.getUser();
    this.logueado = false;
  }

  public getUser(): void {
    this.acercaDeMi.getUsuario().subscribe({
      next: (response:Usuario) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }      
    })
  }

}
