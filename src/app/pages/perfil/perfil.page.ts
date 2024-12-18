import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CameraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  reservas: any[]=[];


  constructor(
    private router: Router,
    public cameraService: CameraService

  ) { }

  async ngOnInit() {
    
    const infoUsuario = localStorage.getItem('authUsuario');
    if (infoUsuario) {
      this.usuario = JSON.parse(infoUsuario);
      console.log('usuaio cargado de local storage:', this.usuario);
      this.router.navigate(['/perfil']);
    }

    const reservasGuardadas = localStorage.getItem('reservas');
    if (reservasGuardadas) {
      this.reservas = JSON.parse(reservasGuardadas);
      console.log('Reservas cargadas:', this.reservas);
    }

    await this.cameraService.loadSaved();


  }
  cerrarSesion() {
    localStorage.removeItem('authUsuario');
    this.router.navigate(['/perfil']);
  
  }


  addPhotoToGallery() {
    this.cameraService.addNewToGallery();

  }

}
