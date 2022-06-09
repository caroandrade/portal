import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, Etiquetas, Post } from 'src/app/shared/interfaces/wordPress.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MuestraService {
  private urlEndPoint: string = "https://www.mendoza.edu.ar/wp-json/wp/v2"

  

  constructor( private http: HttpClient) { }

   
 
    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${ this.urlEndPoint }/categories`);
   }
 
    getEtiquetas(): Observable<Etiquetas[]>{
    return this.http.get<Etiquetas[]>(`${ this.urlEndPoint }/tags`);
  }

  getNovedades(num:number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.urlEndPoint}/posts?categories=${num}`);
  }
 
}
