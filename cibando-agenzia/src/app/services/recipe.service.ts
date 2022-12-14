import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = "api/recipes";

  constructor(private http: HttpClient) { }

  // con questo mdosdjsfjeokwe
  getRecipes(): Observable<Recipe[]> {

    // qui uso l'of per il file mock
   //return of (RECIPES);

   return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);

  }

  getRecipe(id: string): Observable<Recipe>{
    // const recipe = RECIPES.find(res => res._id == id);
    // return of (recipe);

    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }


  modifyRecipe(id: string, form: any): Observable<any>{
    return this.http.put<any>(`${this.apiBaseUrl}/${id}`, form);
   }

}
