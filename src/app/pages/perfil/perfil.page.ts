import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/autenticador.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const infoUsuario = localStorage.getItem('authUsuario');
    if (infoUsuario) {
      this.usuario = JSON.parse(infoUsuario);
      console.log('usuaio cargado de local storage:', this.usuario);
    }
    
  }
  cerrarSesion() {
    localStorage.removeItem('authUsuario');
    this.router.navigate(['/login']);
  }
}
