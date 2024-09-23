import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { FavoritePageComponent } from './component/favorite-page/favorite-page.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { AuthorDetailsComponent } from './component/author-details/author-details.component';
import { LoaderComponent } from './component/loader-component/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './component/search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    FavoritePageComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    LoaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
