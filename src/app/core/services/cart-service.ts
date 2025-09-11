import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private readonly _cart$ = new BehaviorSubject<Product[]>([]);
    readonly cart$ = this._cart$.asObservable();

    get cart(): Product[] {
      return this._cart$.value;
    }

    add(product: Product) {
      const updated = [...this.cart, product];
      this._cart$.next(updated);
    }

    remove(product: Product) {
      const updated = this.cart.filter(p => p.id !== product.id);
      this._cart$.next(updated)
    }

    clear() {
      this._cart$.next([]);
    }
}
