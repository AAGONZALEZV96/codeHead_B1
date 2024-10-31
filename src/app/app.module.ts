import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { Modal1Component } from './components/modal1/modal1.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { FormLComponent } from './components/form-l/form-l.component';
import { Modal2Component } from './components/modal2/modal2.component';
import { FormLogComponent } from './components/form-log/form-log.component';



@NgModule({
  declarations: [AppComponent, TabsComponent, Modal1Component, Modal2Component,DropDownComponent, FormLComponent, MenuComponent, FormLogComponent ],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule],
  providers:  [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
