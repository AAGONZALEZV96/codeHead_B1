import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component {

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss() /* cierra el modal de icicio */
  }
}
