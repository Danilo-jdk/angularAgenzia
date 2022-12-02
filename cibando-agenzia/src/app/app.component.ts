import { Component } from '@angular/core';
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



  clienti = ['danilo', 'alessio', 'marco', 'claudia'];


  colore = "orange";

  onChangeAccetto(){
    this.accetto = !this.accetto;
  }

}
