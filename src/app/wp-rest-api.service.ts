import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WpRestApiService {
  base_path = `https://remking.com/wp-json/wp/v2/posts?page=1&per_page=6`;
  getBlog() {
    return this.httpClient.get(this.base_path).pipe(retry(2), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
       // A client-side or network error occurred. Handle it accordingly.
       console.error('An error occurred:', error.error.message);
     } else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
     }
     // return an observable with a user-facing error message
     return throwError('Something bad happened; please try again later.');
  }
  nextUser(page) {
    return this.httpClient
      .get(`https://remking.com/wp-json/wp/v2/posts?page=${(page)}&per_page=6`)
      .pipe(retry(2), catchError(this.handleError));
  }
  previousUser(page) {
    return this.httpClient
      .get(`https://remking.com/wp-json/wp/v2/posts?page=${(page)}&per_page=6`)
      .pipe(retry(2), catchError(this.handleError));
  }
  constructor(private httpClient: HttpClient) { }
  
  
}


