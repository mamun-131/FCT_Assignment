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

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'

    })
  }
  options = {
    headers: this.httpOptions.headers
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetAllProducts/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  addPurchase(userId: number, productId:number) {
    var body = {
      id:3,
      userId: 3,
      productId: 3
    };
    return this.httpClient.post('/api/FCT_Purchase/AddPurchase', body,this.options);
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
