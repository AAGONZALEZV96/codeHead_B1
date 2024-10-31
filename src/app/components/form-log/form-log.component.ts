import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/autenticador.service';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.scss'],
})
export class FormLogComponent implements OnInit {
  
  correo: string = ''; 
  password: string = '';  
  mensajeError: string | null = null; 

  constructor(private autenticador: AuthService, private router: Router) { }
  ngOnInit() {  
  }

  iniciarSesion() {
    if (this.autenticador.verificarCredenciales(this.correo, this.password)) {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

     
      const usuarioAutenticado = usuarios.find((usuario: { email: string }) => usuario.email === this.correo);

      if (usuarioAutenticado) {
        this.autenticador.guardarUsuarioAutenticado(usuarioAutenticado); 
        this.mensajeError = null;
        console.log('Inicio de sesión exitoso:', usuarioAutenticado);

        // enrutador a perfil
        this.router.navigate(['/perfil']);
      } else {
        this.mensajeError = 'Usuario no encontrado'; 
      }
    } else {
     
      this.mensajeError = 'Credenciales incorrectas';
      console.log('Credenciales incorrectas');
    }
  }
 
}


