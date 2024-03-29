import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { switchMap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  //Leer Parametros url
  constructor( private activateRoute: ActivatedRoute,
                private heroesServices: HeroesService,
                private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesServices.getHeroePorId(id)  )
    )
    .subscribe( heroe => this.heroe = heroe)
    
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
