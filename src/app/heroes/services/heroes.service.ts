import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient) { }

  getHerore(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId( id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias( termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}`)
  }

  agregarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  eliminarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.delete<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`)
  }
}
