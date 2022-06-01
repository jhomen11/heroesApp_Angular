import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _auth: Auth | undefined

  get auth(){
    return {...this._auth}
  }

  constructor(private http: HttpClient) { }

  verificaAtutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false)
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(auth => {
          this._auth  = auth
          return true
        })
      )

  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),//guardando los datos de la autenticación
        tap(resp => localStorage.setItem('token', resp.id)),//guardando los datos de la autenticación en localstorage
      )
  }

  logout(){
    this._auth = undefined
  }

}
