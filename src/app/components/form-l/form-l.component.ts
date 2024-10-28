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
      rut: ['', [Validators.required, this.rutValidator]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmarPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatch });
  }

  ngOnInit() {}

  // Método de validación para el RUT
  rutValidator(control: any) {
    const rutRegex = /^[0-9]{8}-[0-9kK]{1}$/; // Formato: 00000000-0 o 00000000-k
    const validRut = rutRegex.test(control.value);
    return validRut ? null : { invalidRut: true };
  }

  // Método de validación para la contraseña
  passwordValidator(control: any) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,8}$/; // Al menos 1 mayúscula, 1 número, 6-8 caracteres
    const validPassword = passwordRegex.test(control.value);
    return validPassword ? null : { invalidPassword: true };
  }

  // Validar que las contraseñas coincidan
  passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmarPassword = group.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { noMatch: true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const { nombre, apellido, direccion, rut, celular, email, password } = this.registroForm.value;
      const claveSecreta = 'my_secret_key';

      // Encriptar la contraseña
      const encriptaPassword = CryptoJS.AES.encrypt(password, claveSecreta).toString();
      console.log("Contraseña encriptada:", encriptaPassword);

      // Obtener usuarios existentes del local storage
      const usuarios: { email: string; rut: string; password: string; }[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Comprobar duplicados de RUT y email
      const correoExistente = usuarios.some((usuario: { email: string }) => usuario.email === email);
      const rutExistente = usuarios.some((usuario: { rut: string }) => usuario.rut === rut);
      
      if (correoExistente) {
        console.log('El correo ya está registrado');
        return;
      }

      if (rutExistente) {
        console.log('El RUT ya está registrado');
        return;
      }

      // Crear un nuevo usuario con la contraseña encriptada
      const nuevoUsuario = { nombre, apellido, direccion, rut, celular, email, password: encriptaPassword };
      usuarios.push(nuevoUsuario);
      
      // Guardar la lista actualizada de usuarios en el local storage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      
      // Mostrar en consola solo la información relevante, excluyendo la contraseña
      console.log('Formulario enviado exitosamente:', {
        nombre,
        apellido,
        direccion,
        rut,
        celular,
        email
      });
      
      this.modalController.dismiss();
    } else {
      console.log('Formulario no válido');
    }
  }
}
