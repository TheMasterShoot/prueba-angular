import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CarsI } from 'src/app/compartido/models/cars.interface';
import { apiService } from 'src/app/compartido/services/api.service';
import { filter, take } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TrackHttpError } from 'src/app/compartido/models/trackHttpError';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: CarsI[] = [];
  private query:string ='';

  constructor(@Inject(DOCUMENT) private document:Document, private api: apiService, private route:ActivatedRoute, private router:Router) { 
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getCarByQuery();
  }


  onScrollDown(): void {
    this.getDataFromService();
  }

  onScrollUp(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private getDataFromService(): void {
    this.api.searchCars(this.query).pipe(take(1)).subscribe((res:any) => {
      this.cars = res;
    }, (error:TrackHttpError) => console.log((error.friendlyMessage)));
  }

  private getCarByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private onUrlChanged(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(
      () => {
        this.cars=[];
        this.getCarByQuery()
      }
    )
  }

}


