import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RecipesModule} from './recipes/recipes.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { AuthorInfoDialogComponent } from './shared/author-info-dialog/author-info-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { InfoPageComponent } from './shared/info-page/info-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    AuthorInfoDialogComponent,
    ConfirmDialogComponent,
    PageNotFoundComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RecipesModule,
    HttpClientModule,
    // MatModules
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
