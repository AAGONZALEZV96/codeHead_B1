import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
/* import { MenuComponent } from 'src/app/components/menu/menu.component'; */
import { ServiciosComponent } from 'src/app/components/servicios/servicios.component';






@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage}])
  ],
  declarations: [HomePage, /* MenuComponent */ ServiciosComponent],
  exports: [HomePage]
})
export class HomePageModule {}

