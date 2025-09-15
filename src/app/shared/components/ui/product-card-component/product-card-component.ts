import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../../../core/services/product-service';
import { ButtonComponent } from "../button-component/button-component";
import { RouterLink } from '@angular/router';
import { CartService } from '../../../../core/services/cart-service';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-card-component',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css'
})
export class ProductCardComponent {

  productData = inject(ProductService)
  cart = inject(CartService);

  @Input() name = "Placeholder";
  @Input() imageUrl = "Placeholder";
  @Input() price = 0;
  @Input() isAvailable = true;
  @Input() id = ''
  @Input() currentProduct: Product = {  name: 'placeholder',
                                        description: 'placeholder',
                                        price: 0,
                                        imageUrl: 'placeholder',
                                        createdAt: 'placeholder',
                                        updatedAt: 'placeholder',
                                        isAvailable: false,
                                        id: 'placeholder'
                                      }

  onAddToCart(product: Product) {
    this.cart.add(product);
  }
}
