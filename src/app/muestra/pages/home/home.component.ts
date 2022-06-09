import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  

  
  
  idCat:string="";
  


  constructor() { }

  ngOnInit(): void {
  }
  
  asignarNum(id:string){
  this.idCat=id;
  
    
    console.log('home',this.idCat);
   
   
  }
  }
  

