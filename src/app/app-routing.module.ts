import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: () => import('./components/vistas/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'car-list', loadChildren: () => import('./components/vistas/cars/car-list/car-list.module').then(m => m.CarListModule) },
  { path: 'car-details/:id', loadChildren: () => import('./components/vistas/cars/car-details/car-details.module').then(m => m.CarDetailsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
