import { Subject } from 'rxjs/Rx';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('test recipe 1', 'this is a simple test',
      'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAabAAAAJDAyNjA2MjZhLWVkMWQtNGYzYi04MzU4LTExM2FmNjM2NmIyMA.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('test recipe 2', 'this is a simple test',
      'https://assets.fastcompany.com/image/upload/w_707,f_auto,q_auto:best,fl_lossy/wp-cms/uploads/2017/06/p-1-sonic-burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 120)
      ]),
      new Recipe('Spaghetti', 'a simple test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpou73FSpVlHbucdBzC2-XV-OtTSjgRLMD4OqRbvFF8CW-4um5jA',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 120)
      ]),
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
