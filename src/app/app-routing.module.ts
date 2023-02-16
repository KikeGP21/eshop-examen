import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    // 2. Configurar el routing para que cuando abra la aplicación se vaya directamente a esta página.
    path: '',
    redirectTo: 'lista-articulos',
    pathMatch: 'full'
  },
  {
    path: 'lista-articulos',
    loadChildren: () => import('./pages/lista-articulos/lista-articulos.module').then( m => m.ListaArticulosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
