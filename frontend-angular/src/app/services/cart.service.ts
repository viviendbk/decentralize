// cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = '/api/cart'; // Adjust URL according to your API

  constructor(private http: HttpClient) { }

  getCartData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/1`);
  }

  addToCart(product: any): Observable<any> {
    // Assuming your API accepts product ID and quantity
    const cartItem = { productId: product.productId, quantity: 1 };
    return this.http.post<any>(`${this.apiUrl}/${product.userId}`, cartItem);
  }
}
