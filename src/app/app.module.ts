import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [AppComponent, TabsComponent, MenuComponent],
=======
import { Modal1Component } from './components/modal1/modal1.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';


@NgModule({
  declarations: [AppComponent, TabsComponent, Modal1Component,DropDownComponent ],
>>>>>>> ad8f26a2e4aaeb959187cf5242c47980a63b85c2
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
