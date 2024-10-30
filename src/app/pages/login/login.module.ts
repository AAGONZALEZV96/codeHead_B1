import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage}]), HttpClientModule
  ],
  declarations: [LoginPage,],
  exports: [LoginPage]
})
export class LoginPageModule {}
