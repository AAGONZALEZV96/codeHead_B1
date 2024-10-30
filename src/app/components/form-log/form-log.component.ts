import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/autenticador.service';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.scss'],
})
export class FormLogComponent implements OnInit {
  correo: string = '';  // Variable para almacenar el correo ingresado
  password: string = '';  // Variable para almacenar la contraseña ingresada
  mensajeError: string | null = null;  // Mensaje de error en caso de credenciales incorrectas

  constructor(private autenticador: AuthService, private router: Router) { }
  ngOnInit() {
    
  }



  /* iniciarSesion() {

    if (this.autenticador.verificarCredenciales(this.correo, this.password)) {

      const usuarioAutenticado = this.autenticador.obtenerUsuarioAutenticado();
      this.autenticador.guardarUsuarioAutenticado(usuarioAutenticado);
      
      this.mensajeError = null;
      console.log('Inicio de sesión exitoso:', usuarioAutenticado);
      // Redirigir al perfil o realizar otra acción

      this.router.navigate(['/perfil']);

    } else {
      // Credenciales incorrectas
      this.mensajeError = 'Credenciales incorrectas';
      console.log('Credenciales incorrectas');
    }
  }
  ngOnInit() {
    
   }
} */
  iniciarSesion() {
    if (this.autenticador.verificarCredenciales(this.correo, this.password)) {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Obtener el usuario que coincide con las credenciales
      const usuarioAutenticado = usuarios.find((usuario: { email: string }) => usuario.email === this.correo);

      if (usuarioAutenticado) {
        this.autenticador.guardarUsuarioAutenticado(usuarioAutenticado); // Ahora esto debería funcionar
        this.mensajeError = null;
        console.log('Inicio de sesión exitoso:', usuarioAutenticado);

        // Redirigir al perfil o realizar otra acción
        this.router.navigate(['/perfil']);
      } else {
        this.mensajeError = 'Usuario no encontrado'; // Manejo de error si no se encuentra el usuario
      }
    } else {
      // Credenciales incorrectas
      this.mensajeError = 'Credenciales incorrectas';
      console.log('Credenciales incorrectas');
    }
  }
  cerrarSesion() {
    localStorage.removeItem('authUsuario'); // Elimina el usuario autenticado del local storage
  }
}


