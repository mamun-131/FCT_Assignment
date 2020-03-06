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

  //get all products
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetAllProducts/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  //buy a product
  addPurchase(userId: string, productId:number) {
    var body = {      
      userId: userId,
      productId: productId
    };
    return this.httpClient.post('/api/FCT_Purchase', body,this.options);
  }

  //get the buying list of user
  getAllPurchases(): Observable<any[]> {
    return this.httpClient.get<any[]>('api/FCT_PurchaseDetail')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  //cancle purchase from user buying list
  deletePurchasesById(id: number) {
    return this.httpClient.delete('api/FCT_Purchase/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
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
