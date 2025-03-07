import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
import { RouterModule } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AutenticadorService  } from 'src/app/services/autenticador.service';
import { CameraService } from 'src/app/services/camara.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule, RouterModule.forChild([{ path: '', component: LoginPage}]), HttpClientModule
  ],
  providers:[AutenticadorService ],
  declarations: [PerfilPage] 
})
export class PerfilPageModule {}
