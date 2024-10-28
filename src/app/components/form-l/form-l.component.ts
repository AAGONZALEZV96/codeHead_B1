import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-form-l',
  templateUrl: './form-l.component.html',
  styleUrls: ['./form-l.component.scss'],
})
export class FormLComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registroForm.valid) {
      const { nombre, apellido, direccion, rut, celular, email, password } = this.registroForm.value;
      const claveSecreta = 'my_secret_key';

      const encriptaPassword = CryptoJS.AES.encrypt(password, claveSecreta).toString();
      console.log("Contraseña encriptada:", encriptaPassword);  
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      const nuevoUsuario = { nombre, apellido, direccion, rut, celular, email, password: encriptaPassword };
      usuarios.push(nuevoUsuario); 
      
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      console.log('Formulario enviado exitosamente:', this.registroForm.value);
      this.modalController.dismiss();
    } else {
      console.log('Formulario no válido');
    }
  }
}
