import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private readonly apiURL = "https://node-eemi.vercel.app/api/products"

    http = inject(HttpClient)

    private handle<T> (op: string) {
    console.error('HTTP error', op)
    return throwError(() => op)
  }

  getAll(): Observable<Product[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map(response => response.items),
      catchError((err: HttpErrorResponse) => {
        console.error('getAll() failed', err);
        return of([] as Product[])
      })
    )
  }

  getOne(id: string | null): Observable<Product | null> {
    return this.http.get<any>(`${this.apiURL}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(`getOne(${id}) failed:`, err);
        return of(null);
      })
    )
  }
}
