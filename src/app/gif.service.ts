import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { GifModel } from "./gif.model";

@Injectable({
  providedIn: "root"
})
export class GifService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<GifModel[]> {
    return this.http
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=4U2LPKZfp2Z1T1j7Mz1fD2ZnoF1evAKZ&limit=16&rating=G"
      )
      .pipe(
        map((response: any) => {
          return response.data.map((gif: any) => {
            return {
              id: gif.id,
              title: gif.title,
              image: gif.images.downsized_large.url
            };
          });
        }),
        catchError(error => {
          return error;
        })
      );
  }

  searchByQuery(query: string): Observable<GifModel[]> {
    return this.http
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=4U2LPKZfp2Z1T1j7Mz1fD2ZnoF1evAKZ&q=" +
          query +
          "&limit=16&offset=0&rating=G&lang=en"
      )
      .pipe(
        map((response: any) => {
          return response.data.map((gif: any) => {
            return {
              id: gif.id,
              title: gif.title,
              image: gif.images.downsized_large.url
            };
          });
        }),
        catchError(error => {
          return error;
        })
      );
  }
}
