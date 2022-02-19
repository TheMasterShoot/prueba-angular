import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars.component';



@NgModule({
  declarations: [
    CarListComponent,
    CarDetailsComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    CarListComponent,
    CarDetailsComponent,
    CarsComponent
  ]
})
export class CarsModule { }
