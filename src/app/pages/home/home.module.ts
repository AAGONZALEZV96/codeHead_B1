import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { RouterModule, Routes} from '@angular/router';
/* import { MenuComponent } from 'src/app/components/menu/menu.component'; */
import { ServiciosComponent } from 'src/app/components/servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];


@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, /* MenuComponent */ ServiciosComponent],
  exports: [HomePage]
})
export class HomePageModule {}

