import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./shared/components/ui/button-component/button-component";
import { ProductListComponent } from "./features/products/product-list-component/product-list-component";
import { HeaderComponent } from "./shared/components/layout/header-component/header-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, ProductListComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExamAngularFT11');
}
