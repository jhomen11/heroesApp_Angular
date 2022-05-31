import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap} from 'rxjs/operators'

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 3px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'Dc Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe ={
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private heroesServices: HeroesService,
                private activatedRoute: ActivatedRoute,
                private route: Router) { }

  ngOnInit(): void {

    if(!this.route.url.includes('editar')){
      return
    }
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroesServices.getHeroePorId(id))
    )
    .subscribe(heroe => this.heroe = heroe)
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0 || this.heroe.alt_img?.trim().length === 0){
      return
    }
    
    if( this.heroe.id){
      //Actualizar
      this.heroesServices.actualizarHeroe(this.heroe)
        .subscribe( heroe => {
          this.route.navigate(['/heroes/', heroe.id])
        })
    }else{
      //Crear nuevo registro
      this.heroesServices.agregarHeroe( this.heroe)
      .subscribe( resp => {
        this.route.navigate(['/heroes/listado'])
      } )
    }
  }

}
