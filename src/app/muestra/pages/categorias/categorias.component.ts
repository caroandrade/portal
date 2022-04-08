import { Component, OnInit } from '@angular/core';
import { MuestraService } from '../../services/muestra.service';
import { Categoria } from '../../../shared/interfaces/wordPress.interfaces';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: [`
 
  `
  ]
})
export class CategoriasComponent implements OnInit {

  lista:Categoria[]=[];
  
  constructor( private categoriaList: MuestraService) { }

  ngOnInit(): void {
    this.categoriaList.getCategorias()
      .subscribe( lista => this.lista = lista); 
  }

}
