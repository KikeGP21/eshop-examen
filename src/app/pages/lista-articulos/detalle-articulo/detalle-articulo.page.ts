import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.page.html',
  styleUrls: ['./detalle-articulo.page.scss'],
})
export class DetalleArticuloPage implements OnInit {
  public articuloId: any = '';
  public articulo: any = '';

  public descripcionArticulo: string = "Descripción: "
  public precioArticulo: string = "Precio: "
  public stockArticulo: string = "Stock: "

  constructor(
    private _articulosService: ArticulosService,
    private _activedRouted: ActivatedRoute
  ) {}

  /**
   * ngOnInit(): Recibe el id del artículo y llama al método get_articuloByID() del servicio de artículos.
   */
  ngOnInit() {
    this._activedRouted.paramMap.subscribe((paramMap) => {
      let parametro: any | string = '';
      parametro = paramMap.get('articuloId');
      this.articuloId = parametro;
    });

    this._articulosService
      .get_articuloByID(this.articuloId)
      .subscribe((data) => {
        this.articulo = data;
      });

    console.log(this.articulo);
  }
}
