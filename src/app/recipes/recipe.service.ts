import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test', 
        'This is simply a test', 
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=353&q=80',
        [new Ingredient('Meat', 1)]),
        new Recipe('ABTest', 'This is simply b test', 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=353&q=80',
        [new Ingredient('Veggies', 1)])
        ];

        constructor(private slService: ShoppingListService) {}

        getRecipes() {
            return this.recipes.slice();
        }

        addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients);
        }
}