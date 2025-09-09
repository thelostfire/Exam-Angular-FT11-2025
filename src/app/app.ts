import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./shared/components/ui/button-component/button-component";
import { ProductListComponent } from "./features/products/product-list-component/product-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExamAngularFT11');
}
