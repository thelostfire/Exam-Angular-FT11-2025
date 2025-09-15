import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product-service';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/ui/button-component/button-component";
import { ProductCardComponent } from "../../../shared/components/ui/product-card-component/product-card-component";
import { map, switchMap } from 'rxjs';
import { CartService } from '../../../core/services/cart-service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product-detail-component',
  imports: [AsyncPipe, ButtonComponent, ProductCardComponent],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute)
  private products = inject(ProductService)
  cart = inject(CartService)
  productId: string = ''

  product$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    switchMap(id => this.products.getOne(id))
  )
  
  onAddToCart(product: Product) {
      this.cart.add(product);
    }

  // product = this.products.getOne(this.productId);
  productsList = this.products.getAll();
}
