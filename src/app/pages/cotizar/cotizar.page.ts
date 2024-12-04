import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.page.html',
  styleUrls: ['./cotizar.page.scss'],
})
export class CotizarPage implements OnInit {
  regiones = [
    {
      "NombreRegion": "Arica y Parinacota",
      "comunas": ["Arica", "Camarones", "Putre", "General Lagos"],
      "valor": 4000
    },
    {
      "NombreRegion": "Tarapacá",
      "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
      "valor": 4000
    },
    {
      "NombreRegion": "Antofagasta",
      "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
      "valor": 4000
    },
    {
      "NombreRegion": "Atacama",
      "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
      "valor": 4000
    },
    {
      "NombreRegion": "Coquimbo",
      "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
      "valor": 3000
    },
    {
      "NombreRegion": "Valparaíso",
      "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
      "valor": 3000
    },
    {
      "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
      "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
      "valor": 3000
    },
    {
      "NombreRegion": "Región del Maule",
      "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
      "valor": 3000
    },
    {
      "NombreRegion": "Región del Biobío",
      "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
      "valor": 2000
    },
    {
      "NombreRegion": "Región de la Araucanía",
      "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
      "valor": 2000
    },
    {
      "NombreRegion": "Región de Los Ríos",
      "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
      "valor": 2000
    },
    {
      "NombreRegion": "Región de Los Lagos",
      "comunas": ["Osorno", "Puerto Octay", "Purranque", "Río Negro", "San Juan de la Costa", "San Pablo", "Puerto Varas", "Puerto Montt", "Castro", "Ancud", "Dalcahue", "Curaco de Vélez", "Quemchi", "Quinchao", "Osorno", "Calbuco", "Maullín", "Puerto Montt"],
      "valor": 2000
    },
    {
      "NombreRegion": "Región Aysén del General Carlos Ibáñez del Campo",
      "comunas": ["Coyhaique", "Lago Verde", "Aysén", "Chile Chico", "Cochrane", "O'Higgins", "Río Ibáñez", "Tortel"],
      "valor": 1000
    },
    {
      "NombreRegion": "Región de Magallanes y de la Antártica Chilena",
      "comunas": ["Punta Arenas", "Puerto Natales", "Porvenir", "Primavera", "Cabo de Hornos", "Antártica", "Puerto Williams", "Laguna Blanca", "Río Verde"],
      "valor": 1000
    },{
			"NombreRegion": "Región Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
      "valor": 1000
	}
  ];

  /* Variables origen */
  selectedRegionOrigen: string = '';
  selectedComunaOrigen: string = '';
  selectedComunasOrigen: string[] = [];

 /* Variables destino */
  selectedRegionDestino: string = '';
  selectedComunaDestino: string = '';
  selectedComunasDestino: string[] = [];

  /* Dimensiones y peso */
  largo: number | null = null;
  ancho: number | null = null;
  altura: number | null = null;
  peso: number | null = null;

  /* Resultado */
  costo: number | null = null;

  constructor() {}

  ngOnInit() {}

  getComunas(type: 'origen' | 'destino') {
    const selectedRegion = type === 'origen' ? this.selectedRegionOrigen : this.selectedRegionDestino;
    const region = this.regiones.find((r) => r.NombreRegion === selectedRegion);

    if (type === 'origen') {
      this.selectedComunasOrigen = region ? region.comunas : [];
    } else if (type === 'destino') {
      this.selectedComunasDestino = region ? region.comunas : [];
    }
  }

  calcularCosto() {
    if (!this.largo || !this.ancho || !this.altura || !this.peso) {
      alert('Por favor, ingrese todas las dimensiones y el peso.');
      return;
    }

    const regionOrigen = this.regiones.find((r) => r.NombreRegion === this.selectedRegionOrigen);
    const regionDestino = this.regiones.find((r) => r.NombreRegion === this.selectedRegionDestino);

    if (!regionOrigen || !regionDestino) {
      alert('Seleccione correctamente las regiones de origen y destino.');
      return;
    }

    const volumen = this.largo * this.ancho * this.altura; 
    const tarifaBase = Math.max(regionOrigen.valor, regionDestino.valor);

    this.costo = tarifaBase + this.peso * 100; 
  }
  limpiarDatos() {
   
    this.selectedRegionOrigen = '';
    this.selectedComunaOrigen = '';
    this.selectedComunasOrigen = [];
  
    this.selectedRegionDestino = '';
    this.selectedComunaDestino = '';
    this.selectedComunasDestino = [];
  
    this.largo = null;
    this.ancho = null;
    this.altura = null;
    this.peso = null;
  
    this.costo = null;
  }
}