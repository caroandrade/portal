import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuestraRoutingModule } from './muestra-routing.module';
import { EtiquetasComponent } from './pages/etiquetas/etiquetas.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { TarjetasComponent } from './component/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    EtiquetasComponent,
    HomeComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    MuestraRoutingModule
  ]
})
export class MuestraModule { }
