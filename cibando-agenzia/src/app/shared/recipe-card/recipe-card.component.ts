import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
 @Input() recipes: Recipe[];
 @Output() titoloRicetta = new EventEmitter();

 ruolo: any;

  constructor() { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) != null){
      this.ruolo = (JSON.parse(localStorage.getItem('user'))).role;
    }
  }

  emettiTitolo(titolo){
    this.titoloRicetta.emit(titolo);
  }

}
