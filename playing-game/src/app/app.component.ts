import { Component } from '@angular/core';
import { PlayingCardComponent } from './component/playing-card/playing-card.component';

@Component({
  selector: 'app-root',
  template: `<app-playing-card></app-playing-card>`,  // Utilisation du composant dans le template
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marquer le composant comme autonome
  imports: [PlayingCardComponent]  // Importer le composant autonome
})
export class AppComponent {}
