import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecipeEditorComponent } from './recipe/recipe-editor/recipe-editor.component';
import { ConvertTimePipe } from './common/convert-time.pipe';
import {environment} from '../../environments/environment';

// MatImports
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


export const API_URL = 'API_URL';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    ConvertTimePipe,
    RecipeEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // MatModules
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,

  ],
  exports: [
    RecipeListComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeEditorComponent
  ],
  providers: [{
    provide: API_URL,
    useValue: environment.API_URL
  }],
})
export class RecipesModule { }
