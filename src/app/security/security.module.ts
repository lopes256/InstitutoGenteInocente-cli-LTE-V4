import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UsersComponent } from './users/users.component';
import { UsergroupComponent } from './usergroup/usergroup.component';
import { UsersformComponent } from './usersform/usersform.component';
import { UsergroupformComponent } from './usergroupform/usergroupform.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsergroupComponent,
    UsersformComponent,
    UsergroupformComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports: [
    UsersComponent,
    UsergroupComponent,
    UsersformComponent,
    UsergroupformComponent
  ]
})
export class SecurityModule { }
