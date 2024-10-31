import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.scss'],
})
export class FormLogComponent implements OnInit {
  
  correo: string = ''; 
  password: string = '';  
  mensajeError: string | null = null; 

  constructor() {

  }

  ngOnInit() {
      
  }


}


