import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RecipeService} from '../../recipes/common/recipe.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class InfoPageComponent implements OnInit {

  recipesNumber = 0;
  constructor(private recipeService: RecipeService,
              private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getRecipes();
    this.recipeService.changesTriggered.subscribe(() => {
      this.getRecipes();
      this.cdr.detectChanges();
    });
  }

  getRecipes(): void {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      this.recipesNumber = recipes.length;
      this.cdr.detectChanges();
    });
  }

}
