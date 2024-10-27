import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component implements OnInit {
  loginForm: FormGroup;

  constructor(private modalController: ModalController, formBuilder: FormBuilder/* BORRAR */) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(){

  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      console.log('Formulario enviado:', this.loginForm.value);
    }else{
      console.log('Formulario no enviado:');
    }
  }

  dismiss() {
    this.modalController.dismiss() /* cierra el modal de icicio */
  }

}
