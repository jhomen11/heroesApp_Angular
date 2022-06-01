import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 20px
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  // auth!: Auth

  get auth(){
    return this.authServices.auth
  }

  constructor(private router: Router,
              private authServices: AuthService ) { }



  ngOnInit(): void {
  }

  logout(){

    this.router.navigate(['./auth/login'])
    localStorage.removeItem('token')

  }

}
