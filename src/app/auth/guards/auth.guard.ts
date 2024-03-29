import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authServices: AuthService,
              private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
    //   if(this.authServices.auth.id){
    //     return true
    //   }
    // return true;
    return this.authServices.verificaAtutenticacion()
        .pipe(
          tap( estaAutenticado => {
            if(!estaAutenticado){
              this.router.navigate(['./auth/login'])
            }
          })
        )

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

      return this.authServices.verificaAtutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      )
    //   if(this.authServices.auth.id){
    //     return true
    //   }

    // return false;
  }
}
