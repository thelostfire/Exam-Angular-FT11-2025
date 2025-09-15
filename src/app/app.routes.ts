import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list-component/product-list-component';
import { ProductDetailComponent } from './features/products/product-detail-component/product-detail-component';
import { RegisterComponent } from './features/auth/register-component/register-component';
import { LoginComponent } from './features/auth/login-component/login-component';
import { PageNotFoundComponent } from './features/errors/page-not-found-component/page-not-found-component';
import { CartComponent } from './features/cart/cart-component/cart-component';
import { OrderConfirmationComponent } from './features/cart/order-confirmation-component/order-confirmation-component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'checkout', component: CartComponent},
    {path: 'confirmed', canActivate: [AuthGuard], component: OrderConfirmationComponent},
    {path: '**', component: PageNotFoundComponent}
];
