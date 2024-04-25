import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-container',

  standalone: true,
  imports: [HttpClientModule, MatIcon],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {
  ngOnInit(): void {
    this.fetchData('pizza');
  }
  display: string = 'none';
  recipes: any[] = [];
  singleRecipe: any;
  httpClient = inject(HttpClient);
  API_KEY = '718b42fd-4a3f-4127-95ab-d8a75e283168';
  fetchData(query: string) {
    this.httpClient
      .get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${this.API_KEY}`
      )
      .subscribe((recipes: any) => {
        this.recipes = recipes.data.recipes;
      });
  }

  submitSearch(val: string) {
    this.fetchData(val);
  }

  getSingleRecipe(id: string) {
    this.display = 'grid';
    this.httpClient
      .get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${this.API_KEY}`
      )
      .subscribe((recipe: any) => {
        console.log(recipe);
        this.singleRecipe = recipe.data.recipe;
      });
  }

  closeRecipe() {
    this.display = 'none';
  }
}
