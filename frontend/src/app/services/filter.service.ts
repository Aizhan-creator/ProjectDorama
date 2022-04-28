import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dorama, Film, Filter } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  doramaList: dorama[] = [];
  BASE_URL = 'http://127.0.0.1:8000/main/doramas/';
  BASE_URL_FILM = 'http://127.0.0.1:8000/main/films/';

  constructor(
    private http: HttpClient,
  ) { this.initdorama(); }
  initdorama(): void {
    this.http.get<dorama[]>(this.BASE_URL).subscribe((data) => {
      this.doramaList = data;
    });
  }
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.BASE_URL_FILM);
  }

  filterdorama(filter: Filter): void {
    this.http.get<dorama[]>(this.BASE_URL).subscribe((data) => {
      this.doramaList = data.filter((value: any) => {
        const okYear = value.year >= filter.yearFrom;
        const okGenres = value.genres.some((el: any) => filter.genres.includes(el.name));
        const okFilter = filter.genres.length === 0;
        return okYear && (okGenres || okFilter);
      });
      this.doramaList.sort((a, b): any => {
        if (filter.orderBy === 'Date') {
          if (a.year > b.year) { return 1; }
          return -1;
        } else if (filter.orderBy === 'Rating') {
          if (a.mark > b.mark) { return 1; }
          return -1;
        } else if (filter.orderBy === 'Alphabet') {
          if (a.name > b.name) { return 1; }
          return -1;
        }
      });
    });
  }

  getdoramaList(): dorama[] {
    return this.doramaList;
  }
}
