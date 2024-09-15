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
              loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
            },
            
            {
              path: 'library',
              loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
            },
            /* {
              path: 'search',
              loadChildren: () => import('./search/search-page.module').then((m) => m.SearchPageModule),
            }, */
          ],
        },
      ]),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
