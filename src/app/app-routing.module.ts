import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
// import { CommonModule } from '@angular/common';
// import { MiComponente } from './mi-componente/mi-componente.component'
// import { OtroComponente } from './otro-componente/otro-componente.component'
import { MuestraComponent } from './muestra/muestra.component';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './login/login.component';
import { HistorialComponent } from './historial/historial.component';
// import { PruebaComponent } from './prueba/prueba.component';


const routes: Routes = [
  {
    path: 'muestra', // ruta raíz
    component: MuestraComponent
  },
  {
    path: '', // se accesa /otra-ruta
    component: PortadaComponent
  },
  {
    path: 'login', // se accesa /otra-ruta
    component: LoginComponent
  },
  {
    path: 'historial', // se accesa /otra-ruta
    component: HistorialComponent
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
} 
