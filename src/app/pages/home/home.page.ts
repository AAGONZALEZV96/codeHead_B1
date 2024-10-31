import { Component, OnInit } from '@angular/core';
import { ApiPersonasService } from 'src/app/servis/api-personas.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  items: any[]=[];
  constructor(private apiPersonasService:ApiPersonasService){}
  
  ngOnInit(){
    const datos = localStorage.getItem('datos');
    if (datos) {
      this.items = JSON.parse(datos);
      console.log("Consulta al local storage");
      
    } else {
      this.apiPersonasService.obtenerDatosPersonas().subscribe((datos)=>{
        console.log(datos); 
        this.items = datos.results;
        console.log("Consulta a la api");
        
        // Almacenar los randoms en el local storage
        localStorage.setItem('datos', JSON.stringify(this.items));
      });
    }
  }
}
