import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ReflectionService } from '../services/reflectionService';

@Injectable({
  providedIn: 'root',
})
export class ReflectionGuard implements CanActivate {
  private readonly LIMIT = 20;

  private reflectionService = inject(ReflectionService);
  private router = inject(Router);

  canActivate(): boolean {
    this.reflectionService.incrementCounter();

    const count = this.reflectionService.counter();

    if (count > this.LIMIT) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
