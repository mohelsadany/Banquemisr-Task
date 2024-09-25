import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoriteBooks';
  private favoritesSubject = new BehaviorSubject<any[]>(this.getFavorites());

  favorites$ = this.favoritesSubject.asObservable();

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
    this.favoritesSubject.next(favorites);
  }

  isFavorite(bookKey: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(book => book.key === bookKey);
  }

  removeFavorite(bookKey: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(book => book.key !== bookKey);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }
}
