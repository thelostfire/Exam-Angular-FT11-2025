import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item-component',
  imports: [CurrencyPipe],
  templateUrl: './cart-item-component.html',
  styleUrl: './cart-item-component.css'
})
export class CartItemComponent {

  @Input({required: true}) product!: Product;
  @Output() remove = new EventEmitter<Product>();

  onRemove() {
    this.remove.emit(this.product);
  }
}
