import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { calculator, library, logIn, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  constructor() {
   
    addIcons({calculator , search, logIn });
  }

}
