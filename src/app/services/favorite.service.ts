// In favorites.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'})
export class FavoritesService {
  private storageKey = 'favoriteBooks';

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  toggleFavorite(book: any): void {
    let favorites = this.getFavorites();
    const index = favorites.findIndex(f => f.key === book.key);
    if (index === -1) {
      favorites.push(book);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(bookKey: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(book => book.key === bookKey);
  }
}
