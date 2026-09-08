import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UsersComponent } from './users/users.component';
import { UsergroupComponent } from './usergroup/usergroup.component';
import { UsersformComponent } from './usersform/usersform.component';
import { UsergroupformComponent } from './usergroupform/usergroupform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsergroupComponent,
    UsersformComponent,
    UsergroupformComponent,
    UserprofileComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports: [
    UsersComponent,
    UsergroupComponent,
    UsersformComponent,
    UsergroupformComponent,
    UserprofileComponent,
    ChangepasswordComponent
  ]
})
export class SecurityModule { }
