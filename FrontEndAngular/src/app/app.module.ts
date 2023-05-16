import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaComponent } from './components/experiencias/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FormacionComponent } from './components/educacion/formacion/formacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HabilidadesDurasComponent } from './components/skills/habilidades-duras/habilidades-duras.component';
import { HabilidadesBlandasComponent } from './components/skills/habilidades-blandas/habilidades-blandas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { HabilidadDuraIndividualComponent } from './components/skills/habilidades-duras/habilidad-dura-individual/habilidad-dura-individual.component';
import { HabilidadBlandaIndividualComponent } from './components/skills/habilidades-blandas/habilidad-blanda-individual/habilidad-blanda-individual.component';
import { Page404Component } from './components/page404/page404.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExperienciasComponent,
    ExperienciaComponent,
    EducacionComponent,
    FormacionComponent,
    SkillsComponent,
    HabilidadesDurasComponent,
    HabilidadesBlandasComponent,
    ProyectosComponent,
    ProyectoComponent,
    HabilidadDuraIndividualComponent,
    HabilidadBlandaIndividualComponent,
    Page404Component,
    PortfolioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
