import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PortadaComponent } from './portada/portada.component';
import { PieComponent } from './pie/pie.component';
import { MuestraComponent } from './muestra/muestra.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
// import { PruebaComponent } from './prueba/prueba.component';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PortadaComponent,
    PieComponent,
    MuestraComponent,
    LoginComponent,
    // PruebaComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
