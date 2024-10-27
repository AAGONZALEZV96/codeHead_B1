import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Component } from 'src/app/components/modal1/modal1.component';
import { Modal2Component } from 'src/app/components/modal2/modal2.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private modalController: ModalController) {}

  async openModalreg()/* modal1 */ {
    const modal = await this.modalController.create({
      component: Modal1Component,
    });
    return await modal.present();
  }

  async openModalog(){
    const modal = await this.modalController.create({
      component: Modal2Component,
    });
    return await modal.present();
  }

}
