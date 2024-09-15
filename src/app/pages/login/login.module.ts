import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: LoginPage}])
  ],
  declarations: [LoginPage],
  exports: [LoginPage]
})
export class LoginPageModule {}
