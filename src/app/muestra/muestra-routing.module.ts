import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EtiquetasComponent } from './pages/etiquetas/etiquetas.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'muestra',
      children:[
        { path:'home', component: HomeComponent},
        { path:'categorias', component: CategoriasComponent },
        { path:'etiquetas', component: EtiquetasComponent},
        { path: '**', redirectTo: 'categorias'}

    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuestraRoutingModule { }
