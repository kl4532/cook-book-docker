import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Recipe} from './models/recipe';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  changesTriggered: EventEmitter<boolean> = new EventEmitter();

  // Passing those headers in options for any http request was triggering problems with Cors policy -> and stopping requests.
  // I couldn't find workaround.
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': 'HoA'
      }
    )
  };

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
    @Inject('API_URL') private baseUrl: string) {
  }

  getAllRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes`).pipe(map((recipes: any) => {
      return recipes.map((recipe: any) => {
        return {
          _id: recipe.id,
          name: recipe.name,
          preparationTimeInMinutes: recipe.preparation_time,
          description: recipe.description
        };
      });
    }));
  }

  getRecipeDetails(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/recipes/${id}`).pipe(mergeMap((recipe: any) => {
      return this.http.get(`${this.baseUrl}/ingredients/${id}`).pipe(map((ingredients: any) => {
          const detailedRecipe = {
            _id: id,
            name: recipe[0].name,
            preparationTimeInMinutes: recipe[0].preparation_time,
            description: recipe[0].description,
            ingredients: ingredients.ingredients
          };
          return detailedRecipe;
        }));
    }));
  }

  createRecipe(recipe: Recipe): any {
    return this.http.post<Recipe>(`${this.baseUrl}/recipes`, recipe).subscribe(
      data => {
        console.log('success', data);
        this.changesTriggered.emit(true);
      },
      error => console.log('ERROR', error)
    );
  }

  deleteRecipe(id: number): any {
    return this.http.delete(`${this.baseUrl}/recipes/${id}`);
  }

  updateRecipe(id: number, recipe: Recipe): any {
    return this.http.put(`${this.baseUrl}/recipes/${id}`, recipe).subscribe(
      data => {
        this.changesTriggered.emit(true);
      },
      error => console.log('ERROR', error)
    );
  }

  confirmDeletion(id: number): void {
    this.getRecipeDetails(id).subscribe(recipe => {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          message: `Are you sure you want to remove ${recipe.name} recipe?`,
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.deleteRecipe(id).subscribe(
            (res: any) => {
              this.changesTriggered.emit(true);
              this.router.navigate(['']);
            },
            (error: any) => console.log('ERROR', error)
          );
        }
      });
    });
  }
}
