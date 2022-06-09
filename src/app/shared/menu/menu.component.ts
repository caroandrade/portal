import { Component, Input, OnInit } from '@angular/core';
import { MuestraService } from 'src/app/muestra/services/muestra.service';
import { Post } from '../interfaces/wordPress.interfaces';

interface MenuItem{
  ruta    :string;
  nombre  : string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
      ul{
        width: 300px;
       
      }
      li{
        cursor: pointer;
      }

  `
  ]
})
export class MenuComponent implements OnInit {
  post: Post[]=[];

 

  constructor(private novedades: MuestraService) { }

  ngOnInit(): void {
  }
  menuItmes:MenuItem[]=[
    {
      ruta:'/muestra/categorias',
      nombre: 'Categorias'
    },
    {
      ruta:'/muestra/etiquetas',
      nombre: 'Etiquetas'
    },
     {
       ruta:'/muestra/home',
      nombre: 'home'
     }
    // {
    //   ruta:'/muestra/post',
    //   nombre: 'Post'
    // }
   
  ]


}
  
   
  

