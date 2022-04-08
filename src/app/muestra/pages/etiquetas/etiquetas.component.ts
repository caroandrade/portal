import { Component, OnInit } from '@angular/core';
import { Etiquetas } from 'src/app/shared/interfaces/wordPress.interfaces';
import { MuestraService } from '../../services/muestra.service';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styles: [
  ]
})
export class EtiquetasComponent implements OnInit {

  etiquetas:Etiquetas[]=[];


  constructor(private listaEtiquetas: MuestraService) { }

  ngOnInit(): void { 
      this.listaEtiquetas.getEtiquetas()
        .subscribe(etiquetas => this.etiquetas = etiquetas); 
  }

}
