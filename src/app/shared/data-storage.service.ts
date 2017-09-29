import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put('https://recipe-book-2c35d.firebaseio.com/recipes.json?auth=' + token,
                    this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://recipe-book-2c35d.firebaseio.com/recipes.json?auth=' + token)
            .map(
              // (response: Response) => {
                // const recipes: Recipe[] = response.json();
                (recipes) => {
                for (let recipe of recipes) {
                  if (!recipe['ingredients']) {
                    console.log(recipe); // check if there's no ingredients for that recipe
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
              }
            )
            .subscribe(
              (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
              }
            );
  }
}
