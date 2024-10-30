import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

interface Usuario {
  nombre: string;
  apellido: string;
  direccion: string;
  rut: string;
  celular: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Método para hashear la contraseña
  hashearPassword(password: string): string {
    return CryptoJS.SHA256(password).toString();
  }

  verificarCredenciales(correo: string, password: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const passwordHasheada = this.hashearPassword(password); // Hasheamos la contraseña ingresada
    return usuarios.some((usuario: { email: string; password: string }) =>
      usuario.email === correo && usuario.password === passwordHasheada // Comparamos el hash
    );
  }

  guardarUsuarioAutenticado(usuario: Usuario) {
    localStorage.setItem('authUsuario', JSON.stringify(usuario)); // Guardamos el usuario en el local storage
  }

  obtenerUsuarioAutenticado(): Usuario | null {
    return JSON.parse(localStorage.getItem('authUsuario') || 'null'); // Obtenemos el usuario del local storage
  }
}


