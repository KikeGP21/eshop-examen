import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  // 3º Crear en el servicio un método denominado 'get_articulos' y que este método llame al siguiente servicio: https://dummyjson.com/products

  private url: string = 'https://dummyjson.com/products/';

  constructor(private _http: HttpClient) {}

  /**
   * get_articulos(): Llama a servicio externo (web) para traer un listado de artículos.
   */
  get_articulos() {
    return this._http.get(this.url);
  }

  /**
   * get_articuloByID(): Devuelve un artículo que se llama por un Id.
   * @param id 
   * @returns 
   */
  get_articuloByID(id: string) {
    return this._http.get(this.url + id);
  }
}
