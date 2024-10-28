import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';/* npm install --save-dev @types/crypto-js */

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
      password: ['', [Validators.required,]],
      confirmarPassword: ['', [Validators.required]],
    });
  };

  ngOnInit() { }
  onsummit() {
    if (this.registroForm.valid) {

      const { nombre, apellido, direccion, rut, celular, email, password, confirmarPassword } = this.registroForm.value;
      const encriptaPassword = CryptoJS.AES.encrypt(password,'*******').toString();/*  Encriptar la contraseña */

      const usuario = this.registroForm.value;/*  Obtener los datos del formulario */
      
      const usuarios = JSON.parse(localStorage.getItem('usuarios')||'[]');/*Obtener la lista actual de usuarios almacenados en el localStorage  */
      const nuevoUsuario = { nombre, apellido, direccion, rut, celular, email, password: encriptaPassword, confirmarPassword };
      usuarios.push(nuevoUsuario);/* Agregar el nuevo usuario a la lista */


      localStorage.setItem('usuarios', JSON.stringify(usuarios));/* Guardar la lista actualizada en el localStorage */
      console.log('Formulario enviado exitosamente:', this.registroForm.value);
      this.modalController.dismiss();
    } else {
      console.log('Formulario no enviado:');
    }

      /* const { nombre, apellido, direccion, rut, celular, email, password, confirmarPassword } = this.registroForm.value; 
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('apellido', apellido);
      localStorage.setItem('direccion', direccion);
      localStorage.setItem('rut', rut);
      localStorage.setItem('celular', celular);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      console.log('Formulario enviado:', this.registroForm.value);
      this.modalController.dismiss();
    } else {
      console.log('Formulario no enviado:');
    } */
  }

}
