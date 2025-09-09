import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product-service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/ui/product-card-component/product-card-component';

@Component({
  selector: 'app-product-list-component',
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {
  rawProducts = inject(ProductService)

  products$ = this.rawProducts.getAll()
}
