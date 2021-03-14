import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../common/recipe.service';
import {Recipe} from '../common/models/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RecipeDetailsComponent implements OnInit {
  recipeId = '';
  recipeDetails: any;
  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const param = 'id';
      this.recipeId = params[param];
      this.recipeService.getRecipeDetails(parseInt(this.recipeId)).subscribe(
        (details: Recipe) => {
          this.recipeDetails = details;
          console.log('details', details);
          this.cdr.detectChanges();
          },
        (err: any) => {
          this.router.navigate(['recipeNotFound']);
        }
        );

    });
  }

  onDeleteRecipe(id: number): void {
    this.recipeService.confirmDeletion(id);
  }
}
