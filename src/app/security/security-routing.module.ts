import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UsergroupComponent } from './usergroup/usergroup.component';
import { UsergroupformComponent } from './usergroupform/usergroupform.component';
import { UsersComponent } from './users/users.component';
import { UsersformComponent } from './usersform/usersform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [{
  path: 'usergroup', component: LayoutComponent,
  children: [
    { path: 'list', component: UsergroupComponent },
    { path: 'form', component: UsergroupformComponent },
    { path: 'form/:userGroupCode', component: UsergroupformComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
},
{
  path: 'users', component: LayoutComponent,
  children: [
    { path: 'list', component: UsersComponent },
    { path: 'form', component: UsersformComponent },
    { path: 'form/:loginUser', component: UsersformComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
},
{
  path: 'userprofile', component: LayoutComponent,
  children: [
    { path: 'form/:loginUser', component: UserprofileComponent },
    { path: '', redirectTo: 'form/defaultUser', pathMatch: 'full' }
  ]
},
{
  path: 'changepassword', component: LayoutComponent,
  children: [
    { path: 'form/:loginUser', component: ChangepasswordComponent },
    { path: '', redirectTo: 'form/defaultUser', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
