import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EBook } from '../model/EBook';

@Injectable({
  providedIn: 'root'
})
export class EBookService {

  private cart: any[] = [];

  private apiUrl = 'http://localhost:8080/api/ebooks';

constructor(private http: HttpClient) {}

  getFeaturedEBooks(): Observable<EBook[]> {
    return this.http.get<EBook[]>(`${this.apiUrl}/featured`);
  }

  getAllEBooks(): Observable<EBook[]> {
    return this.http.get<EBook[]>(this.apiUrl);
  }

  getOtherFeaturedItems(): any[] {
    // Replace with actual logic
    return [
      { title: 'Full Stack Java Course', price: 2499, description: 'Learn Full Stack development with Java' },
      // Add more items
    ];
  }
  
  addToCart(ebook: any): void {
    this.cart.push(ebook);
  }

  getCart(): any[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
