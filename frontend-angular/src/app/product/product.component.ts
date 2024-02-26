// products.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';



// cart-data.interface.ts
interface CartData {
  cartItems: CartItem[];
  totalPrice: number;
}

interface CartItem {
  productId: number;
  quantity: number;
  price: string;
  product: Product;
}

interface Product {
  productId: number;
  productName: string;
  description: string;
  price: number;
  category: string;
  stock: string;
}
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
      .subscribe(cartData => {
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
