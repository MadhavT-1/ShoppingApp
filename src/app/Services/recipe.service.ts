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
  recipresChanged = new Subject<Recipe[]>();
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
      'https://media.istockphoto.com/photos/salad-plate-picture-id175197961?k=20&m=175197961&s=612x612&w=0&h=SDYkOzsn_stA97UW1O_YqBoB0RIncCbzR38VzhjQ8T0=',
      [new Ingredient('Lettuce', 1), new Ingredient('Tomatoes', 2)]
    ),
    new Recipe(
      'Fries',
      'This is a Fries',
      'https://media.istockphoto.com/photos/basket-of-famous-fast-food-french-fries-picture-id618214356?b=1&k=20&m=618214356&s=170667a&w=0&h=hBW1Ozw37xluDdo98v4U1JoRlU3elGRUIWFHmGUfmK8=',
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipresChanged.next(this.recipes.slice());
  }
  updateRecice(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipresChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipresChanged.next(this.recipes.slice());
  }
}
