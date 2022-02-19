import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailsRoutingModule } from './car-details-routing.module';
//import { CarDetailsComponent } from './car-details.component';


@NgModule({
  declarations: [
//CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarDetailsRoutingModule
  ]
})
export class CarDetailsModule { }
