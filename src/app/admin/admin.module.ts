import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmsComponent } from './ajouter-films/ajouter-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListerFilmsComponent,
    AjouterFilmsComponent,
    DetailsFilmComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
