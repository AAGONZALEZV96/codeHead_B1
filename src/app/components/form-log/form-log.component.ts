import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.scss'],
})
export class FormLogComponent implements OnInit {
  correo: string = '';  // Variable para almacenar el correo ingresado
  contrasena: string = '';  // Variable para almacenar la contraseña ingresada
  mensajeError: string | null = null;  // Mensaje de error en caso de credenciales incorrectas

  constructor() {}

  ngOnInit() {}

  iniciarSesion() {
    // Obtener los usuarios almacenados en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verificar si el usuario existe con el correo y la contraseña ingresados
    const usuarioEncontrado = usuarios.find((usuario: { email: string; password: string; }) => {
      return usuario.email === this.correo && usuario.password === this.encriptarContrasena(this.contrasena);
    });

    // Si se encuentra el usuario, se realiza el inicio de sesión
    if (usuarioEncontrado) {
      console.log('Inicio de sesión exitoso:', usuarioEncontrado);
      this.mensajeError = null; // Limpiar el mensaje de error
      // Aquí puedes redirigir al usuario a otra página o realizar otra acción
    } else {
      this.mensajeError = 'Credenciales incorrectas'; // Mostrar mensaje de error
      console.log('Credenciales incorrectas');
    }
  }

  // Método para encriptar la contraseña
  encriptarContrasena(contrasena: string): string {
    const claveSecreta = 'my_secret_key';
    return CryptoJS.AES.encrypt(contrasena, claveSecreta).toString();
  }
}

