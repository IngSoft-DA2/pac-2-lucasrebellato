import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ReflectionService {
  private http = inject(HttpClient);

  counter = signal<number>(0);
  names = signal<string[]>([]);
  isLoadingNames = signal<boolean>(false);
  errorGettingNames = signal<string | null>(null);

  incrementCounter() {
    this.counter.set(this.counter() + 1);
  }

  getNames() {
    this.isLoadingNames.set(true);
    
    const url = `${environment.apiBaseUrl}/Reflection/importers`;

    this.http.get<string[]>(url).subscribe({
      next: (response) => {
        this.names.set(response);
        this.isLoadingNames.set(false);
      },
      error: (error) => {
        this.errorGettingNames.set('Error fetching names');
        this.isLoadingNames.set(false);
      },
    });
  }
}
