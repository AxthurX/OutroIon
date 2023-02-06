import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/abas/abas.module').then((m) => m.AbasModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./views/abas/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'fotos',
    loadChildren: () =>
      import('./views/abas/modais/fotos/fotos.module').then(
        (m) => m.FotosModule
      ),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./views/abas/modais/maps/maps.module').then((m) => m.MapsModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
