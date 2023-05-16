import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {path: 'portfolio', component:PortfolioComponent},
    {path: 'login', component:LoginComponent},
    {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
    {path: '**' , component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
