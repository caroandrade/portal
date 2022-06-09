import {  Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';



import { Post } from 'src/app/shared/interfaces/wordPress.interfaces';
import { MuestraService } from '../../services/muestra.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit, OnChanges  {
  post: Post[]=[];
  num:number=6;


@Input() idCat!: string;


  constructor( private novedades: MuestraService,
  
              ) { }

 
              

  ngOnInit(): void {

    
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('esto se ejecuto',this.idCat);
this.num= parseInt(this.idCat)
console.log('esto es un numero', this.num);

  this.novedades.getNovedades(this.num)
      .subscribe( post => this.post = post)
  }

}
