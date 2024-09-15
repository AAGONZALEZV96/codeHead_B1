import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';


  @NgModule({
    imports: [
      RouterModule.forRoot([
        {
          path: '',
          component: TabsComponent,
          children: [
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'home',
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
      ]),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
