import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { FavoritePageComponent } from './component/favorite-page/favorite-page.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { AuthorDetailsComponent } from './component/author-details/author-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'book/:id', component: BookDetailsComponent },
    { path: 'author/:id', component: AuthorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
