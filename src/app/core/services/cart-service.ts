import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private _cart$ = new BehaviorSubject<Product[]>([]);
    cart$ = this._cart$.asObservable();

    get cart(): Product[] {
      return this._cart$.value;
    }

    add(product: Product) {


// On attribue in ID unique au product de manière très moche pour pouvoir les supprimer individuellement
      const newProduct: Product = {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl:product.imageUrl,
            isAvailable: product.isAvailable,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            id: product.id.concat("", (Math.random() * 10000000).toString())
        } 
      const updated = [...this.cart, newProduct];
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
