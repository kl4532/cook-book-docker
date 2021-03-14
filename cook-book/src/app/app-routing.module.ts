import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeEditorComponent} from './recipes/recipe/recipe-editor/recipe-editor.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {InfoPageComponent} from './shared/info-page/info-page.component';

const routes: Routes = [
  { path: '', component: InfoPageComponent },
  {
    path: 'recipe-details/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'recipe-editor',
    component: RecipeEditorComponent,
  },
  {
    path: 'recipe-editor/:id',
    component: RecipeEditorComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
