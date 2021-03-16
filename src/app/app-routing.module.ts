import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagueComponent } from './components/pague/pague.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: PagueComponent,
    pathMatch: 'full'
  },
  {
    path: 'sobremi',
    component: SobreMiComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
  {
    path: 'educacion',
    component: EducacionComponent
  },
  {
    path: 'portafolio',
    component: ProyectosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
