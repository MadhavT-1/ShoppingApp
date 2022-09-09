import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();
  constructor(private shoppingService: ShoppingService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'This is a Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      [new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]
    ),
    new Recipe(
      'Salad',
      'This is a Salad',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      [new Ingredient('Lettuce', 1), new Ingredient('Tomatoes', 2)]
    ),
    new Recipe(
      'Fries',
      'This is a Fries',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      [new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // slice() returns a copy of the array so you cannot modify the original array
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
