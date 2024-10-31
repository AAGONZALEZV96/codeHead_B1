
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  
  {
    path: '',
    /*  contiene las pestañas */
    component: TabsComponent,

    children: [
      {
        path: '',
        redirectTo: '',
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
      
    ],
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
