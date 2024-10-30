
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    /* Componente principal que contiene las pestañas */
    component: TabsComponent,

    children: [
      {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full',

      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'cotizar',
        loadChildren: () => import('./pages/cotizar/cotizar.module').then((m) => m.CotizarPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      
    ],
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
