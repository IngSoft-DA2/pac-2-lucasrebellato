import { Component, inject, OnInit } from '@angular/core';
import { ReflectionService } from '../services/reflectionService';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrl: './reflection.component.css',
})
export class ReflectionComponent {
  private reflectionService = inject(ReflectionService);

  loading = this.reflectionService.isLoadingNames;
  error = this.reflectionService.errorGettingNames;
  names = this.reflectionService.names;

  buttonClicked = false;

  getNames() {
    this.reflectionService.getNames();
  }
  
}
