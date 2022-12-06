import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  percorso = '../../../../assets/images/difficolta-';

  ricetta: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.onGetRecipe2();
  }


  onGetRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    this.recipeService.getRecipe(id).subscribe({
      next: (res) => {
        this.ricetta = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  onGetRecipe2(){
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = Number(urlParams['_id']);
          this.recipeService.getRecipe(id).subscribe({
            next: (res) => {
              this.ricetta = res;
            },
            error: (err) => {
              console.log(err)
            }
          })
       }
    )
  }


}
