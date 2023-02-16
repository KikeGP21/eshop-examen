import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';
import { ListaArticulosPageModule } from './lista-articulos.module';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.page.html',
  styleUrls: ['./lista-articulos.page.scss'],
})
export class ListaArticulosPage implements OnInit {
  public titulo: String = 'Lista de artículos';
  public articulos: any = '';

  public tablaTitulo: string = 'Título';
  public tablaPrecio: string = 'Precio';

  // 6.2º
  constructor(
    private _articulosService: ArticulosService,
    private _router: Router
  ) {}

  /**
   * ngOnInit(): Llama al servicio de obtener artículos de la clase 'articulos.service.ts' y introduce el valor recibido en la variable articulos.
   */
  ngOnInit() {
    this._articulosService.get_articulos().subscribe((data) => {
      this.articulos = data;
      this.articulos = this.articulos.products;
    });
  }

  /**
   * view_Contact(): Se mueve a la página 'detalle-articulo' y le pasa el Id del artículo clickado.
   * @param articuloId
   */
  view_Contact(articuloId: string) {
    this._router.navigate(['/lista-articulos/detalle-articulo', articuloId]);
  }
}
