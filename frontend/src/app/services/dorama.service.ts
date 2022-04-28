import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dorama, doramaQuery, doramaNameQuery } from '../models';

@Injectable({
  providedIn: 'root'
})
export class doramaService {
  BASE_URL = 'http://127.0.0.1:8000/main/doramas';
  constructor(
    private http: HttpClient,
  ) { }

  getdoramaById(doramaId: string | null): Observable<dorama> {
    return this.http.get<dorama>(`${this.BASE_URL}/${doramaId}/`);
  }
  getdoramaByName(doramaName: string | null): Observable<dorama> {
    return this.http.get<dorama>(`${this.BASE_URL}/${doramaName}/`);
  }
}

