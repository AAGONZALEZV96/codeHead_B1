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


  hashearPassword(password: string): string {
    return CryptoJS.SHA256(password).toString();
  }

  verificarCredenciales(email: string, password: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const passwordHasheada = this.hashearPassword(password); 
    return usuarios.some((usuario: { email: string; password: string }) =>
      usuario.email === email && usuario.password === passwordHasheada 
    );
  }

  guardarUsuarioAutenticado(usuario: Usuario) {
    localStorage.setItem('authUsuario', JSON.stringify(usuario)); 
  }

  obtenerUsuarioAutenticado(): Usuario | null {
    return JSON.parse(localStorage.getItem('authUsuario') || 'null');
  }
}


