import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'cibando-agenzia';

  // nome = 'Danilo';
  // cognome = 'De Filio';

  nome: string = 'Danilo';
  telefono: number = 454667;
  accetto: boolean = false;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
