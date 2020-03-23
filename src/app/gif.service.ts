import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GifService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=4U2LPKZfp2Z1T1j7Mz1fD2ZnoF1evAKZ&limit=25&rating=G"
      )
      .pipe(
        map(response => {
          return response;
        }),
        catchError(error => {
          return error;
        })
      );
  }

  searchByQuery(query: string): Observable<any> {
    return this.http
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=4U2LPKZfp2Z1T1j7Mz1fD2ZnoF1evAKZ&q=" +
          query +
          "&limit=25&offset=0&rating=G&lang=en"
      )
      .pipe(
        map(response => {
          return response;
        }),
        catchError(error => {
          return error;
        })
      );
  }
}
