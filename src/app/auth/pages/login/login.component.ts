import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router,
                private authServices: AuthService) { }

 login(){

  //Ir al backend
  this.authServices.login()
    .subscribe(resp => {
      console.log(resp)

      if(resp.id){

        this.router.navigate(['./heroes'])
      }
    })
  //respuesta del usuario y almacenar en un servicio la info del usuario
  
 }

}
