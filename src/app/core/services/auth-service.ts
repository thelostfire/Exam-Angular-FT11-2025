import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthResponse, User } from '../models/user';
import { tap } from 'rxjs';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly  apiUrl= 'https://node-eemi.vercel.app/api/auth'
  private http = inject(HttpClient);

  readonly user = signal<User | null>(null);
  readonly token = signal<string | null>(this.readToken());
  readonly isAuthenticated = computed(() => !!this.token());

  constructor() {
    if(this.token()) {
      this.me().subscribe({ error: () => this.logout() })
    }
  }

  register(payload: { name: string; email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, payload).pipe(
      tap(res => this.hydrateAuth(res))
    );
  }

  me() {
    return this.http.get<{ user: User }>(`${this.apiUrl}/me`).pipe(
      tap(({ user }) => this.user.set(user))
    );
  } 

  login(payload: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, payload).pipe(
      tap(res => this.hydrateAuth(res))
    );
  }

  logout() {
    this.user.set(null);
    this.token.set(null);
    localStorage.removeItem(TOKEN_KEY);
  }

  private hydrateAuth(res: AuthResponse) {
    this.user.set(res.user);
    this.token.set(res.token);
    localStorage.setItem(TOKEN_KEY, res.token);
  }

  private readToken() {
    try { return localStorage.getItem(TOKEN_KEY); } catch {
      return null;
    }
  }
}
