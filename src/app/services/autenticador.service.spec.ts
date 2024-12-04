import { TestBed } from '@angular/core/testing';
import { AutenticadorService } from './autenticador.service';
import * as CryptoJS from 'crypto-js';

describe('AutenticadorService', () => {
  let service: AutenticadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticadorService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe almacenar al usuario atenticado en el localStorage', () => {
    const usuario = {
      nombre: 'John',
      apellido: 'Doe',
      direccion: '123 Street',
      rut: '12345678-9',
      celular: '123456789',
      email: 'test@example.com',
      password: 'hashedPassword',
    };

    service.guardarUsuarioAutenticado(usuario);

    const storedUser = JSON.parse(localStorage.getItem('authUsuario') || 'null');
    expect(storedUser).toEqual(usuario); 
  });
  it('deberia recuperar al usuario autenticado desde localStorage', () => {
    const usuario = {
      nombre: 'Dante',
      apellido: 'Sainz',
      direccion: 'calle 123',
      rut: '98765432-1',
      celular: '987654321',
      email: 'test2@email.cl',
      password: 'otraHashedPassword',
    };

    localStorage.setItem('authUsuario', JSON.stringify(usuario));

    const retrievedUser = service.obtenerUsuarioAutenticado();
    expect(retrievedUser).toEqual(usuario);
  });
 
});
