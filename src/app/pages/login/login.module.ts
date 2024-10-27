import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage}])
  ],
  declarations: [LoginPage,],
  exports: [LoginPage]
})
export class LoginPageModule {}
