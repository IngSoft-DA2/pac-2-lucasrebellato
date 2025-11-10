import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReflectionComponent } from './features/reflection/reflection-component/reflection.component';
import { ReflectionGuard } from './features/reflection/guards/reflection-guard';
import { ConsignaComponent } from './shared/components/consigna/consigna.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'reflection',
        component: ReflectionComponent,
        canActivate: [ReflectionGuard],
      },
      {
        path: '',
        component: ConsignaComponent,
      },
    ],
  },
];
