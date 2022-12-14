import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Input() pag: string;

  ricette: Recipe[];

  titoloRicetta: string;

  constructor(private recipeService: RecipeService) {

  }


  ngOnInit(): void {
        //si collega al servizio, che recupera i dati dal server (dal mock) tramite una subscription
        this.recipeService.getRecipes().subscribe({
          // il next viene eseguito se tutto bene
          next: (res) => {
            this.ricette = res;
            // if(this.pag == 'home'){
            //   this.ricette = this.ricette.sort((a,b) => a._id - b._id).reverse().slice(0,4);
            // } else {
            //   this.ricette = this.ricette.sort((a,b) => a._id - b._id)
            // }
          },
          error: (err) => {
            console.log(err)
          }
        })
  }

  catturaTitolo(e: string){
    if(this.titoloRicetta != e){
      this.titoloRicetta = e;
    } else {
      this.titoloRicetta = '';
    }
  }

}
