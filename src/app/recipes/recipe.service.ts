import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A test recipe 1 ', 'This is simply test recipe', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2012/05/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf.jpeg'),
        new Recipe('A test recipe 2 ', 'This is simply test recipe', 'http://gharbaithebazar.com/wp-content/uploads/2016/10/sfrn-Paneer-Taka-Tak.jpg')
    ]
    recipeSelected = new EventEmitter<Recipe>();

    constructor() {

    }

    getRecipes() {
        return this.recipes.slice(0);
    }
}