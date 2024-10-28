
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss'],
})
export class Modal1Component implements OnInit {
  registroForm: FormGroup;

  constructor(private modalController: ModalController,private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      rut: ['', [Validators.required,/*  Validators.minLength(8) */]],
      celular: ['', [Validators.required, /* Validators.minLength(8), Validators.maxLength(9) */]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, /* Validators.minLength(6) */]],
      confirmarPassword: ['', [Validators.required]],
    });
  }
  ngOnInit(){
   
  }
  onsummit() {
    if (this.registroForm.valid) {
      const { nombre, apellido, direccion, rut, celular, email, password, confirmarPassword } = this.registroForm.value;
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('apellido', apellido);
      localStorage.setItem('direccion', direccion);
      localStorage.setItem('rut', rut);
      localStorage.setItem('celular', celular);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('confirmarPassword', confirmarPassword);
      console.log('Formulario enviado:', this.registroForm.value);
    }else{
      console.log('Formulario no enviado:');
    }
  }



  dismiss() {
    this.modalController.dismiss() /* cierra el modal de icicio */
  }

}
