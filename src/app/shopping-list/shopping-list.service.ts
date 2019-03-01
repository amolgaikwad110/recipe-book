import { Ingredient } from './../shared/ingredient.model';

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredients: Ingredient[] = [
      new Ingredient('Apple', 5),
      new Ingredient('Tommato', 15),
      new Ingredient('Mango', 25)
    ]

    ingredientsChanged = new EventEmitter<Ingredient[]>()
    constructor() {

    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients);
    }
}