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
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({calculator , search, logIn });
  }

}
