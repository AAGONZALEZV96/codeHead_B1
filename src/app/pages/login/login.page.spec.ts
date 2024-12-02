import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { Modal1Component } from 'src/app/components/modal1/modal1.component';
import { Modal2Component } from 'src/app/components/modal2/modal2.component';

class ModalControllerMock{
  create = jasmine.createSpy('create').and.returnValue({
    present: jasmine.createSpy('present'),
    dismiss: jasmine.createSpy('dismiss')
  })
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let modalController: ModalControllerMock;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage, Modal1Component, Modal2Component],
      imports: [IonicModule.forRoot()],
      providers:  [{provide: ModalController, useClass: ModalControllerMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    modalController = TestBed.inject(ModalController) as unknown as ModalControllerMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia abrir modal1 cuando se llama a openModalreg', async () => {
   
    await component.openModalreg();
    expect(modalController.create).toHaveBeenCalledWith({
      component: Modal1Component
    });
    expect(modalController.create().present).toHaveBeenCalled();
  });
  it('deberia abrir modal2 cuando se llama a openModalog', async () => {
    
    await component.openModalog();
    expect(modalController.create).toHaveBeenCalledWith({
      component: Modal2Component
    });
    expect(modalController.create().present).toHaveBeenCalled();
  });
});
