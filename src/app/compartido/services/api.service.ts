import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CarsI } from '../models/cars.interface';
import { Observable, throwError } from 'rxjs';
import { TrackHttpError } from '../models/trackHttpError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  url:string = "https://private-anon-d9d1c89964-carsapi1.apiary-mock.com/"

  constructor(private http:HttpClient) { }

  searchCars(query = ''):Observable<CarsI[] | TrackHttpError> {
    let direccion = this.url + "cars?make=" + query; 
    return this.http.get<CarsI[]>(direccion)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetails(id: any) {
    let direccion = this.url + 'cars/' + id;
    return this.http.get<CarsI>(direccion);
  }

  getCarById(id: any):Observable<CarsI>{
    let direccion = this.url + 'cars/' + id;
    return this.http.get<CarsI>(direccion);
  }

  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{
    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
