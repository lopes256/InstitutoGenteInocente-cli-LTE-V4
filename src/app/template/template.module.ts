import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppFooterComponent } from './app-footer/app-footer.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppMainComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppMainComponent,
    AppFooterComponent
  ]
})
export class TemplateModule { }
