import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Modal1Component } from 'src/app/components/modal1/modal1.component';
import { Modal2Component } from 'src/app/components/modal2/modal2.component';

@NgModule({
  imports: [
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage}]), HttpClientModule
  ],
  declarations: [LoginPage],
  exports: [LoginPage]
})
export class LoginPageModule {}
