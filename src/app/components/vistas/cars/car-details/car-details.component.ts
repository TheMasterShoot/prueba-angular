import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CarsI } from 'src/app/compartido/models/cars.interface';
import { apiService } from 'src/app/compartido/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car$!: Observable<CarsI>;

  constructor(private route:ActivatedRoute, private api:apiService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.car$ = this.api.getDetails(id);
    });

    //let carid = this.route.snapshot.paramMap.get('id');
    //this.api.getCarById(carid).subscribe(data =>{
     //this.car$= data;
    //})
  }

  onBack(): void {
    window.history.back();
  }

}
