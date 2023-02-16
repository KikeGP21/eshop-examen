import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaArticulosPage } from './lista-articulos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaArticulosPage,
  },
  {
    path: 'detalle-articulo',
    loadChildren: () =>
      import('./detalle-articulo/detalle-articulo.module').then(
        (m) => m.DetalleArticuloPageModule
      ),
  },
  {
    path: 'detalle-articulo',

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./detalle-articulo/detalle-articulo.module').then(
            (m) => m.DetalleArticuloPageModule
          ),
      },
      {
        path: ':articuloId',
        loadChildren: () =>
          import('./detalle-articulo/detalle-articulo.module').then(
            (m) => m.DetalleArticuloPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaArticulosPageRoutingModule {}
