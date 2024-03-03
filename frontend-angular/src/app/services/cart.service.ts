import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartData } from '../interfaces/cart-data.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = '/api/cart'; // Adjust URL according to your API

  constructor(private http: HttpClient) { }

  getCartData(): Observable<CartData> {
    return this.http.get<CartData>(this.apiUrl); // Assuming the API returns CartData directly
  }

  addToCart(product: any): Observable<any> {
    // Assuming your API accepts product ID and quantity
    const cartItem = { productId: product.productId, quantity: 1 };
    return this.http.post<any>(`${this.apiUrl}/${product.userId}`, cartItem);
  }
}
