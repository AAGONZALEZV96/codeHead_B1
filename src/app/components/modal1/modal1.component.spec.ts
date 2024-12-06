import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Modal1Component } from './modal1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Modal1Component', () => {
  let component: Modal1Component;
  let fixture: ComponentFixture<Modal1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal1Component ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule] 
    }).compileComponents();

    fixture = TestBed.createComponent(Modal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe almacenar datos en localStorage cuando el formulario sea valido', () => {
    
    component.registroForm.setValue({
      nombre: 'Juan',
      apellido: 'Pérez',
      direccion: 'Calle 123',
      rut: '12345678-9',
      celular: '987654321',
      email: 'juan.perez@email.com',
      password: 'contraseñaSegura',
      confirmarPassword: 'contraseñaSegura'
    });

    spyOn(localStorage, 'setItem'); 
    component.onSubmit();
    expect(localStorage.setItem).toHaveBeenCalledWith('nombre', 'Juan');
    expect(localStorage.setItem).toHaveBeenCalledWith('apellido', 'Pérez');
    expect(localStorage.setItem).toHaveBeenCalledWith('direccion', 'Calle 123');
    expect(localStorage.setItem).toHaveBeenCalledWith('rut', '12345678-9');
    expect(localStorage.setItem).toHaveBeenCalledWith('celular', '987654321');
    expect(localStorage.setItem).toHaveBeenCalledWith('email', 'juan.perez@email.com');
    expect(localStorage.setItem).toHaveBeenCalledWith('password', 'contraseñaSegura');
    expect(localStorage.setItem).toHaveBeenCalledWith('confirmarPassword', 'contraseñaSegura');
  });

  it('debe descartar el modal cuando se llama a dismiss', () => {
    const dismissSpy = spyOn(component.modalController, 'dismiss');
    component.dismiss();
    expect(dismissSpy).toHaveBeenCalled();
  });
});
