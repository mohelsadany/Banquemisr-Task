import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'})
export class FavoritesService {
  private storageKey = 'favoriteBooks';

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addFavorite(book: any): void {
    const favorites = this.getFavorites();
    if (!favorites.find(f => f.key === book.key)) {
      favorites.push(book);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(bookKey: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(book => book.key !== bookKey);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
