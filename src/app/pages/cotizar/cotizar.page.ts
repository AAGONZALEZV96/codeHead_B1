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
    const estacionamiento = this.estacionamientos.find((e) => e.nombre === this.selectedEstacionamiento);
    this.costoReserva = estacionamiento ? estacionamiento.costo : null;
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
    this.costoReserva = null;
    this.reservaConfirmada = false;
  }
}
