import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';






@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage}])
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
