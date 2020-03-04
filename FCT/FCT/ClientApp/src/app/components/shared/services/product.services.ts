import { Injectable, Inject } from "@angular/core";
import { Observable, BehaviorSubject, Subscriber, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "../../../models/product.model";
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  //@Inject('BASE_URL') baseUrl: string;
  constructor(private httpClient: HttpClient) {

  }


  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetAllProducts/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
