import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.page.html',
  styleUrls: ['./cotizar.page.scss'],
})
export class CotizarPage implements OnInit {
  regiones = [
    {
      NombreRegion: 'Región Metropolitana de Santiago',
      comunas: [
        {
          nombre: 'Cerrillos',
          estacionamientos: [
            { nombre: 'Estacionamiento Cerrillos 1 - Av. Los Cerrillos 123', costo: 1000 },
            { nombre: 'Estacionamiento Cerrillos 2 - Av. Estación 456', costo: 1200 },
          ],
        },
        {
          nombre: 'Las Condes',
          estacionamientos: [
            { nombre: 'Estacionamiento Las Condes 1 - Av. Apoquindo 789', costo: 1500 },
            { nombre: 'Estacionamiento Las Condes 2 - Av. Las Condes 101', costo: 1800 },
          ],
        },
        {
          nombre: 'Maipú',
          estacionamientos: [
            { nombre: 'Estacionamiento Maipú 1 - Av. Pajaritos 111', costo: 900 },
            { nombre: 'Estacionamiento Maipú 2 - Camino Rinconada 222', costo: 1100 },
          ],
        },
        {
          nombre: 'Santiago',
          estacionamientos: [
            { nombre: 'Estacionamiento Santiago 1 - Av. Libertador Bernardo O\'Higgins 3000', costo: 2000 },
            { nombre: 'Estacionamiento Santiago 2 - Calle San Antonio 450', costo: 2200 },
          ],
        },
        {
          nombre: 'Providencia',
          estacionamientos: [
            { nombre: 'Estacionamiento Providencia 1 - Av. Providencia 1000', costo: 1700 },
            { nombre: 'Estacionamiento Providencia 2 - Calle Los Leones 2050', costo: 1900 },
          ],
        },
        {
          nombre: 'Ñuñoa',
          estacionamientos: [
            { nombre: 'Estacionamiento Ñuñoa 1 - Av. Irarrazabal 1200', costo: 1300 },
            { nombre: 'Estacionamiento Ñuñoa 2 - Av. José Pedro Alessandri 1450', costo: 1400 },
          ],
        },
        {
          nombre: 'Las Condes',
          estacionamientos: [
            { nombre: 'Estacionamiento Las Condes 1 - Av. Apoquindo 890', costo: 1600 },
            { nombre: 'Estacionamiento Las Condes 2 - Calle El Golf 1320', costo: 1900 },
          ],
        },
        {
          nombre: 'La Florida',
          estacionamientos: [
            { nombre: 'Estacionamiento La Florida 1 - Av. Vicuña Mackenna 7500', costo: 950 },
            { nombre: 'Estacionamiento La Florida 2 - Calle de la Florida 580', costo: 1050 },
          ],
        },
        {
          nombre: 'Peñalolén',
          estacionamientos: [
            { nombre: 'Estacionamiento Peñalolén 1 - Av. Tobalaba 7000', costo: 1100 },
            { nombre: 'Estacionamiento Peñalolén 2 - Av. Las Torres 2900', costo: 1200 },
          ],
        },
        {
          nombre: 'Independencia',
          estacionamientos: [
            { nombre: 'Estacionamiento Independencia 1 - Av. Independencia 2000', costo: 1300 },
            { nombre: 'Estacionamiento Independencia 2 - Calle Libertador Bernardo O\'Higgins 500', costo: 1400 },
          ],
        },
        {
          nombre: 'Renca',
          estacionamientos: [
            { nombre: 'Estacionamiento Renca 1 - Av. Juan Antonio Ríos 1200', costo: 800 },
            { nombre: 'Estacionamiento Renca 2 - Calle Lo Marcoleta 300', costo: 1000 },
          ],
        },
        {
          nombre: 'La Cisterna',
          estacionamientos: [
            { nombre: 'Estacionamiento La Cisterna 1 - Av. General Velázquez 5000', costo: 850 },
            { nombre: 'Estacionamiento La Cisterna 2 - Calle La Cisterna 520', costo: 950 },
          ],
        },
        {
          nombre: 'San Bernardo',
          estacionamientos: [
            { nombre: 'Estacionamiento San Bernardo 1 - Av. Colón 5000', costo: 900 },
            { nombre: 'Estacionamiento San Bernardo 2 - Calle Los Álamos 1100', costo: 1000 },
          ],
        },
        {
          nombre: 'El Bosque',
          estacionamientos: [
            { nombre: 'Estacionamiento El Bosque 1 - Av. José Miguel Carrera 1500', costo: 950 },
            { nombre: 'Estacionamiento El Bosque 2 - Calle El Bosque 1200', costo: 1100 },
          ],
        },
        {
          nombre: 'Pudahuel',
          estacionamientos: [
            { nombre: 'Estacionamiento Pudahuel 1 - Av. El Sol 700', costo: 800 },
            { nombre: 'Estacionamiento Pudahuel 2 - Calle Cerro Colorado 450', costo: 900 },
          ],
        },
        {
          nombre: 'La Reina',
          estacionamientos: [
            { nombre: 'Estacionamiento La Reina 1 - Av. Ossa 3400', costo: 1300 },
            { nombre: 'Estacionamiento La Reina 2 - Calle La Reina 2000', costo: 1400 },
          ],
        },
        {
          nombre: 'Vitacura',
          estacionamientos: [
            { nombre: 'Estacionamiento Vitacura 1 - Av. Vitacura 3400', costo: 1800 },
            { nombre: 'Estacionamiento Vitacura 2 - Calle Alonso de Córdova 1600', costo: 2000 },
          ],
        },
      ],
    },
  ];

  selectedRegion: string = '';
  selectedComuna: string = '';
  selectedComunas: { nombre: string; estacionamientos: { nombre: string; costo: number }[] }[] = [];
  estacionamientos: { nombre: string; costo: number }[] = [];
  selectedEstacionamiento: string = '';
  costoReserva: number | null = null;
  reservaConfirmada: boolean = false;
  horasArrendar: number | null = null;

  constructor() {}

  ngOnInit() {}

  onRegionChange() {
    const region = this.regiones.find((r) => r.NombreRegion === this.selectedRegion);
    this.selectedComunas = region ? region.comunas : [];
    this.selectedComuna = '';
    this.estacionamientos = [];
    this.selectedEstacionamiento = '';
    this.costoReserva = null;
    this.reservaConfirmada = false;
  }

  onComunaChange() {
    const comuna = this.selectedComunas.find((c) => c.nombre === this.selectedComuna);
    this.estacionamientos = comuna ? comuna.estacionamientos : [];
    this.selectedEstacionamiento = '';
    this.costoReserva = null;
    this.reservaConfirmada = false;
  }

  calcularReserva() {
    // Encuentra el estacionamiento seleccionado
    const estacionamiento = this.estacionamientos.find((e) => e.nombre === this.selectedEstacionamiento);
    console.log('Estacionamiento seleccionado:', estacionamiento);
  
    // Calcula el costo de la reserva considerando las horas
    if (estacionamiento && this.horasArrendar && this.horasArrendar > 0) {
      this.costoReserva = estacionamiento.costo * this.horasArrendar; // Multiplica costo por horas
    } else {
      this.costoReserva = null; // Maneja caso cuando datos están incompletos
    }
  
    this.reservaConfirmada = false;
  }
  

  confirmarReserva() {
    if (this.selectedEstacionamiento) {
      const reserva = {
        region: this.selectedRegion,
        comuna: this.selectedComuna,
        estacionamiento: this.selectedEstacionamiento,
        costo: this.costoReserva,
        fechaReserva: new Date().toISOString(),
      };

      // Guardar en Local Storage
      const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
      reservas.push(reserva);
      localStorage.setItem('reservas', JSON.stringify(reservas));

      this.reservaConfirmada = true;
    } else {
      alert('Por favor, selecciona un estacionamiento antes de confirmar.');
    }
  }

limpiarDatos() {
  this.selectedRegion = '';
  this.selectedComuna = '';
  this.selectedComunas = [];
  this.estacionamientos = [];
  this.selectedEstacionamiento = '';
  this.horasArrendar = null; // Asegúrate de limpiar este campo también
  this.costoReserva = null;
  this.reservaConfirmada = false;
}
}
