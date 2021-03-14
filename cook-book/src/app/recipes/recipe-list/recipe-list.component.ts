import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../common/models/recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {RecipeService} from '../common/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  searchValue = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private recipeService: RecipeService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAllRecipes();
    this.recipeService.changesTriggered.subscribe(() => {
      this.getAllRecipes();
    });
  }

  getAllRecipes(): void {
    this.recipeService.getAllRecipes().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.filterRecipes();
      this.cdr.detectChanges();
    });
  }

  filterRecipes(): void {
    if (this.searchValue !== '' || !this.searchValue) {
      this.filteredRecipes = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    } else {
      this.filteredRecipes = this.recipes;
    }
  }

  onDeleteRecipe(id: number): void {
    this.recipeService.confirmDeletion(id);
  }

  ngOnDestroy(): void{
  }

}
