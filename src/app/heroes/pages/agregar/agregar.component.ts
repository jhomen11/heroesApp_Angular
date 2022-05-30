import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
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

  constructor( private heroesServices: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return
    }
    this.heroesServices.agregarHeroe( this.heroe).subscribe( resp => {
      console.log('Respuesta', resp)
    } )
  }

}
