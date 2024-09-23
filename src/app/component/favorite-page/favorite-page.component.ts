import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.sass']
})
export class FavoritePageComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(bookKey: string): void {
    this.favoritesService.removeFavorite(bookKey);
    this.loadFavorites();
  }
}
