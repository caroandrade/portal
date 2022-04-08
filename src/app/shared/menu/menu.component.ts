import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    }
   
  ]
}
