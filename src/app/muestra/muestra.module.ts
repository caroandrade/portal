import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MuestraRoutingModule } from './muestra-routing.module';
import { EtiquetasComponent } from './pages/etiquetas/etiquetas.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { TarjetasComponent } from './component/tarjetas/tarjetas.component';
import { PostComponent } from './component/post/post.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    EtiquetasComponent,
    HomeComponent,
    TarjetasComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MuestraRoutingModule,
    ReactiveFormsModule
  ]
})
export class MuestraModule { }
