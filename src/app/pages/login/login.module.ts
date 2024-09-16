import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { FormLComponent } from 'src/app/components/form-l/form-l.component';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: LoginPage}])
  ],
  declarations: [LoginPage, FormLComponent,],
  exports: [LoginPage]
})
export class LoginPageModule {}
