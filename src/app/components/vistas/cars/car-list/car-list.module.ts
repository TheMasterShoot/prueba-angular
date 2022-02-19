import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListRoutingModule } from './car-list-routing.module';
//import { CarListComponent } from './car-list.component';


@NgModule({
  declarations: [
    //CarListComponent
  ],
  imports: [
    CommonModule,
    CarListRoutingModule
  ]
})
export class CarListModule { }
