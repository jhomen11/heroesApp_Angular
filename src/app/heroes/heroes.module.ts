import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'

import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeroeRoutingModule } from './heroe-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HeroeRoutingModule,
    FlexLayoutModule,
  ]
})
export class HeroesModule { }
