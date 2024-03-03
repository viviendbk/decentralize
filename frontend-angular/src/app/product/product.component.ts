import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CartData } from '../interfaces/cart-data.interface'; // Import the CartData interface

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCartData();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  getCartData(): void {
    this.cartService.getCartData()
      .subscribe((cartData: CartData) => { // Define type for cartData
        this.cartItems = cartData.cartItems;
        this.totalPrice = cartData.totalPrice;
      });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product)
      .subscribe(() => {
        this.getCartData(); // Refresh cart data after adding
      });
  }
}
