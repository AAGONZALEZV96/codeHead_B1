import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CotizarPage } from './cotizar.page';

describe('CotizarPage', () => {
  let component: CotizarPage;
  let fixture: ComponentFixture<CotizarPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizarPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CotizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia actualizar comunasOrigen cuando se selecciona una región', () => {
    component.selectedRegionOrigen = 'Coquimbo';
    component.getComunas('origen');
    expect(component.selectedComunasOrigen).toEqual(["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]);
  });

  it('debería restablecer todos los campos cuando se llame a limpiarDatos', () => {
   
    component.selectedRegionOrigen = 'Arica y Parinacota';
    component.selectedComunaOrigen = 'Arica';
    component.selectedComunasOrigen = ['Arica', 'Camarones'];
    component.selectedRegionDestino = 'Coquimbo';
    component.selectedComunaDestino = 'La Serena';
    component.selectedComunasDestino = ['La Serena', 'Coquimbo'];
    component.largo = 50;
    component.ancho = 50;
    component.altura = 50;
    component.peso = 10;
    component.costo = 5000;
    component.limpiarDatos();

    expect(component.selectedRegionOrigen).toBe('');
    expect(component.selectedComunaOrigen).toBe('');
    expect(component.selectedComunasOrigen).toEqual([]);
    expect(component.selectedRegionDestino).toBe('');
    expect(component.selectedComunaDestino).toBe('');
    expect(component.selectedComunasDestino).toEqual([]);
    expect(component.largo).toBeNull();
    expect(component.ancho).toBeNull();
    expect(component.altura).toBeNull();
    expect(component.peso).toBeNull();
    expect(component.costo).toBeNull();
  });
});

