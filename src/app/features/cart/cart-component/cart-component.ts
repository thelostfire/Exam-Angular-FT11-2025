import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart-service';
import { toSignal } from '@angular/core/rxjs-interop'
import { Product } from '../../../core/models/product';
import { RouterLink } from '@angular/router';
import { CartItemComponent } from '../cart-item-component/cart-item-component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-component',
  imports: [RouterLink, CartItemComponent, CurrencyPipe],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css'
})
export class CartComponent {
  private readonly cartService = inject(CartService)

  readonly cart = toSignal<Product[]>(this.cartService.cart$, {initialValue: undefined})

  readonly total = computed(() => 
  this.cart()?.reduce((acc, p) => acc + (p.price ?? 0), 0)
  );

  onRemove(product: Product) {
    this.cartService.remove(product);
  }

  clear() {
    this.cartService.clear()
  }

  trackById = (p: Product) => p.id;
}
