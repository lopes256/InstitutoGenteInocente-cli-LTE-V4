import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PersonComponent } from './person/person.component';
import { PersonFromComponent } from './person-from/person-from.component';

const routes: Routes = [
  {
    path: 'supplier', component: LayoutComponent,
    children: [
      { path: 'lista/:tipoPessoa', component: PersonComponent },
      { path: 'form/:tipoPessoa', component: PersonFromComponent },
      { path: 'form/:tipoPessoa/:codigoPessoa', component: PersonFromComponent },
      { path: '', redirectTo: 'lista/1', pathMatch: 'full' }
    ]
  },
  {
    path: 'collaborator', component: LayoutComponent,
    children: [
      { path: 'lista/:tipoPessoa', component: PersonComponent },
      { path: 'form/:tipoPessoa', component: PersonFromComponent },
      { path: 'form/:tipoPessoa/:codigoPessoa', component: PersonFromComponent },
      { path: '', redirectTo: 'lista/2', pathMatch: 'full' }
    ]
  },
  {
    path: 'branchoffice', component: LayoutComponent,
    children: [
      { path: 'lista/:tipoPessoa', component: PersonComponent },
      { path: 'form/:tipoPessoa', component: PersonFromComponent },
      { path: 'form/:tipoPessoa/:codigoPessoa', component: PersonFromComponent },
      { path: '', redirectTo: 'lista/3', pathMatch: 'full' }
    ]
  },
  {
    path: 'responsible', component: LayoutComponent,
    children: [
      { path: 'lista/:tipoPessoa', component: PersonComponent },
      { path: 'form/:tipoPessoa', component: PersonFromComponent },
      { path: 'form/:tipoPessoa/:codigoPessoa', component: PersonFromComponent },
      { path: '', redirectTo: 'lista/4', pathMatch: 'full' }
    ]
  },
  {
    path: 'family', component: LayoutComponent,
    children: [
      { path: 'lista/:tipoPessoa', component: PersonComponent },
      { path: 'form/:tipoPessoa', component: PersonFromComponent },
      { path: 'form/:tipoPessoa/:codigoPessoa', component: PersonFromComponent },
      { path: '', redirectTo: 'lista/5', pathMatch: 'full' }
    ]
  },
  {
    path: 'beneficiaries', component: LayoutComponent,
    children: [
      { path: 'lista/:tipoPessoa', component: PersonComponent },
      { path: 'form/:tipoPessoa', component: PersonFromComponent },
      { path: 'form/:tipoPessoa/:codigoPessoa', component: PersonFromComponent },
      { path: '', redirectTo: 'lista/6', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
