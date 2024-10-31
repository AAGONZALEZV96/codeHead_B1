import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';
import { AuthService } from 'src/app/services/autenticador.service';

@Component({
  selector: 'app-form-l',
  templateUrl: './form-l.component.html',
  styleUrls: ['./form-l.component.scss'],
})
export class FormLComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      rut: ['', [Validators.required, this.rutValidador]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmarPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatch });
  }

  ngOnInit() {}

 
  rutValidador(control: any) {
    const rutRest = /^[0-9]{8}-[0-9kK]{1}$/; 
    const validRut = rutRest.test(control.value);
    return validRut ? null : { invalidRut: true };
  }
  passwordValidator(control: any) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,8}$/;
    const validPassword = passwordRegex.test(control.value);
    return validPassword ? null : { invalidPassword: true };
  }

  passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmarPassword = group.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { noMatch: true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const { nombre, apellido, direccion, rut, celular, email, password } = this.registroForm.value;

      const hashedPassword = this.authService.hashearPassword(password);
      console.log("Contraseña hasheada:", hashedPassword);

      const usuarios: { email: string; rut: string; password: string; }[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

    
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
      const nuevoUsuario = { nombre, apellido, direccion, rut, celular, email, password: hashedPassword };
      usuarios.push(nuevoUsuario);

    
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

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

