import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CarsI } from 'src/app/compartido/models/cars.interface';

@Component({
  selector: 'app-cars',
  template: `
  <div class="card">
  <div class="image">
      <a [routerLink]="['/car-details', '<car_id>']">
          <img [src]="car.img_url" [alt]="car.make" class="card-img-top"/>    
      </a>
  </div>
  <div class="card-inner">
      <div class="header">
          <a [routerLink]="['/car-details', car.id]">
              <h2>{{car.make}}</h2>
          </a>
          <h4 class="text-muted">{{car.model}}</h4>
      </div>
  </div>
</div>`,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CarsComponent {

  @Input()
  car!: CarsI;



}
