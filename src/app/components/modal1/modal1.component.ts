import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss'],
})
export class Modal1Component  {

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss() /* cierra el modal de icicio */
  }

}
