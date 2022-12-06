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

  constructor() { }

  ngOnInit(): void {
  }

  emettiTitolo(titolo){
    this.titoloRicetta.emit(titolo);
  }

}
