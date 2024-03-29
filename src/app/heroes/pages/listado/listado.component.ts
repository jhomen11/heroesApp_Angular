import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
   
  `
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [] 

  constructor( private heroeServices: HeroesService) { }

  ngOnInit(): void {
    this.heroeServices.getHerore().subscribe(resp => this.heroes = resp)
  }

}
