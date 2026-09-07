import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PersonComponent } from './person/person.component';
import { PersonFromComponent } from './person-from/person-from.component';


@NgModule({
  declarations: [
    PersonComponent,
    PersonFromComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [
    PersonComponent,
    PersonFromComponent
  ]
})
export class PeopleModule { }
