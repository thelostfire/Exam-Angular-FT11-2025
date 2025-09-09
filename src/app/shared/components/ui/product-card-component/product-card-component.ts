import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../../../core/services/product-service';
import { ButtonComponent } from "../button-component/button-component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card-component',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css'
})
export class ProductCardComponent {

  productData = inject(ProductService)

  @Input() name = "Placeholder";
  @Input() imageUrl = "Placeholder";
  @Input() price = 0;
  @Input() isAvailable = true;
  @Input() id = ''
}
