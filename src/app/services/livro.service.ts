import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IGoogleAPIResponse, IItems, IVolumeInfo } from '../views/models/interface';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) {}

  // buscar(valorDigitado: string): Observable<IItems[]> {
  buscar(valorDigitado: string): Observable<IGoogleAPIResponse> {
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<IGoogleAPIResponse>(this.API, { params })
    //.pipe(
      //tap((retornoDAAPI) => console.log('fluxo do tap', retornoDAAPI)),
      //map((resultado) => resultado.items ?? []),
      //tap((resultado) => console.log('fluxo após o map', resultado))
    //);
  }
}
