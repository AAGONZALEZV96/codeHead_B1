import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticadorService  } from 'src/app/services/autenticador.service';
import { CameraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  photo: string | null = null;


  constructor(
    private autenticadorService : AutenticadorService ,
    private router: Router,
    private cameraService: CameraService

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
    this.router.navigate(['/perfil']);
  }
  async capturePhoto() {
    try {
      this.photo = await this.cameraService.takePhoto();
      await this.cameraService.savePhotoUri(this.photo);
      console.log('Foto guardada en:', this.photo);
    } catch (error) {
      console.error('Error al tomar foto:', error);
    }
  }
}
