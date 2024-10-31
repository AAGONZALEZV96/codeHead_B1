import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { RouterModule, Routes} from '@angular/router';
import { ServiciosComponent } from 'src/app/components/servicios/servicios.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiPersonasService } from 'src/app/servis/api-personas.service';


const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];


@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [HomePage, /* MenuComponent */ ServiciosComponent],
  exports: [HomePage],
  providers: [ApiPersonasService]
})
export class HomePageModule {}

