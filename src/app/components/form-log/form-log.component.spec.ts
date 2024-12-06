import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutenticadorService } from 'src/app/services/autenticador.service';
import { FormLogComponent } from './form-log.component';

describe('FormLogComponent', () => {
  let component: FormLogComponent;
  let fixture: ComponentFixture<FormLogComponent>;
  let autenticadorService: jasmine.SpyObj<AutenticadorService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    const autenticadorSpy = jasmine.createSpyObj('AutenticadorService', ['verificarCredenciales', 'guardarUsuarioAutenticado']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [FormLogComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AutenticadorService, useValue: autenticadorSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormLogComponent);
    component = fixture.componentInstance;
    autenticadorService = TestBed.inject(AutenticadorService) as jasmine.SpyObj<AutenticadorService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deberiaa mostrar un error si las credenciales son incorrectas', () => {
    autenticadorService.verificarCredenciales.and.returnValue(false);

    component.correo = 'falso@fake.com';
    component.password = 'falsoPassword';
    component.iniciarSesion();

    expect(autenticadorService.verificarCredenciales).toHaveBeenCalledWith('falso@fake.com', 'falsoPassword');
    expect(component.mensajeError).toBe('Credenciales incorrectas');
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('deberia mostrar un error si no se encuentra el usuario', () => {
    autenticadorService.verificarCredenciales.and.returnValue(true);

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));

    component.correo = 'notfound@fake.com';
    component.password = 'password';
    component.iniciarSesion();

    expect(component.mensajeError).toBe('Usuario no encontrado');
    expect(router.navigate).not.toHaveBeenCalled();
  });
});

