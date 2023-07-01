import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuarioService } from 'src/app/services/loginUsuario.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  
  logueado:boolean = false;

  constructor (private router: Router ,private loginUsaurio: LoginUsuarioService){}

  ngOnInit():void{
    this.logueado = this.loginUsaurio.valido;
  }

loguin(){
  this.router.navigate(['/login']);
}

  logout(){
    location.reload();
  }

}
