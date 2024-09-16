import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Component } from 'src/app/components/modal1/modal1.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: Modal1Component,
    });
    return await modal.present();
  }

}
