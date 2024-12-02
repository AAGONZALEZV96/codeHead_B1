import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';

import { FormLComponent } from './form-l.component';

describe('FormLComponent', () => {
  let component: FormLComponent;
  let fixture: ComponentFixture<FormLComponent>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;

  beforeEach(waitForAsync(() => {

    modalControllerSpy = jasmine.createSpyObj('ModalController', ['dismiss']);
    
    TestBed.configureTestingModule({
      declarations: [ FormLComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
