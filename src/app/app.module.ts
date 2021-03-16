import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PagueComponent } from './components/pague/pague.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PagueComponent,
    SobreMiComponent,
    HabilidadesComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
